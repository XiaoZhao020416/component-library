<template>
    <div>
        <!-- 点击按钮复制文本内容 -->
        <div class="clipboard-container" v-show="typeIndex === 'index1'">
            <span>{{ content }}<span class="copy-button" @click="copyToClipboard">复制文本</span></span>
        </div>
        <!-- 文本区域可编辑复制文本内容 -->
        <div class="clipboard-container" v-show="typeIndex === 'index2'">
            <div :class="['input-section', type]">
              <textarea v-model="inputText" placeholder="编辑要复制的文本"></textarea>
              <button @click="copyToClipboard">Copy</button>
            </div>
            <div :class="['output-section', type]">
              <textarea v-model="pasteText" placeholder="粘贴文本"></textarea>
              <button @click="pasteFromClipboard">Paste</button>
            </div>
        </div>
        <!-- 文本区域可编辑复制文本内容 -->
        <div class="clipboard-container" v-show="typeIndex === 'index3'">
            <div :class="['input-area', type]">
              <textarea v-model="inputText" placeholder="编辑要复制的文本"></textarea>
              <img class="icon-button1" :src="getIconPath('copy')"  @click="copyToClipboard">
              <img class="icon-button2" :src="getIconPath('cut')" @click="cutText">
              <img class="icon-button3" :src="getIconPath('paste')" @click="pasteFromClipboard">
              <img class="icon-button4" :src="getIconPath('delete')" @click="clearText">
            </div>
        </div>
        <!-- 提示框 -->
        <div :class="[type]" v-show="showNotification">
            <div class="notification">
                <span>文本已成功{{ copyOrCut ? '剪切' : '复制' }}到剪贴板</span>
                <button @click="closeNotification" class="close-dialog">关闭</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'orange-clipboard',
    data() {
      return {
        inputText: '这是一段文本~',
        pasteText: '',
        cutdownText: '', // 保存剪切的文本
        copiedText: '', // 保存复制的文本
        showNotification: false,
        copyOrCut: false // 标记是复制还是剪切
      };
    },
    props: {
        content: {
            type: String,
            default: '显示文本',
        },
        type: {
            type: String,
            default: 'default',
        },
        typeIndex: {
            type: String,
            require: true,
        }
    },
    methods: {
        getIconPath(action) {
            return require(`../../../examples/assets/clipboard/${action}-${this.type}.svg`);
        },
        // 剪切和复制共用获取逻辑
        copyOrCutToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand(this.copyOrCut ? 'cut' : 'copy');
            document.body.removeChild(textArea);

            this.showNotification = true;
            setTimeout(() => {
                this.showNotification = false;
            }, 2000); // 2秒后自动关闭提示框
        },
        // 复制
        copyToClipboard() {
            this.copiedText = this.inputText; // 保存复制的文本
            const textToCopy = this.typeIndex === 'index1' ? this.content : this.inputText;
            this.copyOrCut = false; // 设置为复制
            this.copyOrCutToClipboard(textToCopy);
        },
        // 关闭弹窗
        closeNotification() {
            this.showNotification = false;
        },
        // 粘贴文本
        pasteFromClipboard() {
            if (this.cutdownText) {
                this.inputText += this.cutdownText; // 将剪切的文本粘贴到文本框中
            } else if (this.copiedText) {
                this.inputText += this.copiedText; // 将复制的文本粘贴到文本框中
            }
        },
        clearText() {
            this.inputText = '';
        },
        cutText() {
            this.cutdownText = this.inputText;
            this.copyOrCut = true; // 设置为剪切
            this.copyOrCutToClipboard(this.cutdownText);
            this.inputText = '';
        }
    }
};
</script>

<style lang="scss" scoped>
.notification {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    span {
        margin-left: 5px;
    }
    .close-dialog {
        margin-left: 10px;
        cursor: pointer;
        background-color: #fff;
        border-radius: 4px;
        padding: 4px 8px;
    }
    .close-dialog:hover {
        border: 1px solid #fff;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(232, 237, 250, 0.9), 0 2px 4px 0 rgba(232, 237, 250, 0.7);
    }
}
.clipboard-container {
    gap: 20px;
    margin: 20px;
}

.copy-button {
    margin-left: 5px;
    font-size: 12px;
    color: #b6b8bd;
    cursor: pointer;
}

.input-section, .output-section, .clipboard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.input-section, .output-section {
    gap: 10px;
}

textarea, .input-area textarea {
    width: 300px;
    min-width: 300px;
    max-width: 500px;
    height: 120px;
    min-height: 120px;
    max-height: 300px;
    padding: 8px;
    font-size: 14px;
    outline:none;
}

textarea:hover {
    box-shadow: 0 0 10px 0 rgba(232, 237, 250, 0.9), 0 2px 4px 0 rgba(232, 237, 250, 0.7);
}

button {
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
}

.input-area {
    position: relative;
    textarea {
        box-sizing: border-box;
        padding: 8px;
    }

    img {
        cursor: pointer;
    }

    .icon-button1, .icon-button2, .icon-button3, .icon-button4 {
        height: auto;
        align-items: center;
        position: absolute;
        margin: 4px;
    }
      
    .icon-button1 {
        width: 20px;
        bottom: 10px;
        right: 100px;
    }
    .icon-button2 {
        width: 25px;
        bottom: 8px;
        right: 70px;
    }
    .icon-button3 {
        width: 25px;
        bottom: 8px;
        right: 40px;
    }
    .icon-button4 {
        width: 25px;
        bottom: 8px;
        right: 10px;
    }
}

.default, .success {
    textarea {
        border: 2px solid #4caf50;
    }
    button, .notification {
        background-color: #4caf50;
    }
    textarea:focus, textarea:hover {
        border: 2px solid #45a049;
    }
    button:focus, button:hover {
        background-color: #45a049;
    }
    .close-dialog {
        color: #4caf50;
        border: 1px solid #4caf50;
    }
}

.primary {
    textarea {
        border: 2px solid #409eff;
    }
    button, .notification {
        background-color: #409eff;
    }
    textarea:focus, textarea:hover {
        border: 2px solid #3b80c5;
    }
    button:focus, button:hover {
        background-color: #3b80c5;
    }
    .close-dialog {
        color: #409eff;
        border: 1px solid #409eff;
    }
}

.warning {
    textarea {
        border: 2px solid #ffa500;
    }
    button, .notification {
        background-color: #ffa500;
    }
    textarea:focus, textarea:hover {
        border: 2px solid #af770d;
    }
    button:focus, button:hover {
        background-color: #af770d;
    }
    .close-dialog {
        color: #ffa500;
        border: 1px solid #ffa500;
    }
}

.danger {
    textarea {
        border: 2px solid #f56c6c;
    }
    button, .notification {
        background-color: #f56c6c;
    }
    textarea:focus, textarea:hover {
        border: 2px solid #b14646;
    }
    button:focus, button:hover {
        background-color: #b14646;
    }
    .close-dialog {
        color: #f56c6c;
        border: 1px solid #f56c6c;
    }
}
</style>