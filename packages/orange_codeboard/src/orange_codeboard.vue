<template>
  <div>
    <div class="top-box">
      <div class="selected-box">
        <label for="fontSize">字体大小：</label>
        <select v-model="selectedFontSize" @change="updateFontSize">
          <option v-for="fontSize in fontSizes" :key="fontSize" :value="fontSize">{{ fontSize }}px</option>
        </select>
      </div>
  
      <div class="selected-box">
        <label for="theme">主题：</label>
        <select v-model="selectedTheme">
          <option value="chrome">Light</option>
          <option value="twilight">Dark</option>
        </select>
      </div>
  
      <div class="selected-box">
        <label for="language">编程语言：</label>
        <select v-model="selectedLanguage" @change="updateLanguage">
          <option v-for="language in commonLanguages" :key="language" :value="language.toLowerCase()">
            {{ language }}
          </option>
        </select>
      </div>
    </div>

    <ace-editor
      v-model="code"
      :mode="languageModes[selectedLanguage]"
      :theme="selectedTheme"
      :fontSize="`${selectedFontSize}px`"
      :tabSize="tabSize"
      ref="editor"
      style="height: 300px; width: 100%;"
    ></ace-editor>

    <div v-if="allowOutput" class="code-display-board">
      <orange-button type="primary" @click="executeCode">Run Code</orange-button>
      <div v-if="output !== null">
        <h3>输出结果：</h3>
        <pre>{{ output }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import AceEditor from "vue2-ace-editor";
import 'brace'
import 'brace/theme/chrome'
import 'brace/theme/twilight'
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/python';
import 'brace/mode/java';
import 'brace/mode/c_cpp';

export default {
  name: 'orange-codeboard',
  components: {
    AceEditor,
  },
  props: {
    initialValue: {
      type: String,
      default: ""
    },
    allowOutput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      code: "",
      selectedFontSize: 12,
      fontSizes: [12, 14, 16, 18, 20],
      selectedTheme: 'chrome',
      selectedLanguage: 'javascript',
      commonLanguages: ['JavaScript', 'Python', 'Java', 'C++'],
      languageModes: {
        javascript: 'ace/mode/javascript',
        html: 'ace/mode/html',
        python: 'ace/mode/python',
        java: 'ace/mode/java',
        cpp: 'ace/mode/c_cpp',
      },
      tabSize: 2,
      output: null
    }
  },
  mounted() {
    this.code = this.initialValue;
  },
  methods: {
    updateInitialValue(newValue) {
      this.initialValue = newValue;
      this.$emit('initialValueChanged', newValue);
    },
    updateFontSize() {
      const editor = this.$refs.editor.editor;
      if (editor) {
        editor.container.style.fontSize = `${this.selectedFontSize}px`;
      }
    },
    updateLanguage() {
      const editor = this.$refs.editor.editor;
      if (editor) {
        const selectedMode = this.selectedLanguage.toLowerCase();
        editor.getSession().setMode(this.languageModes[selectedMode]);
      }
    },
    executeCode() {
      const logs = [];
      // 重定向 console.log() 的输出到 logs 数组中
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
      };
      // 使用 eval() 函数执行用户输入的代码
      eval(this.code);
      // 将 logs 数组中的输出合并为一个字符串，存储到 output 中
      this.output = logs.join('\n');
      // 恢复 console.log() 的原始行为
      console.log = originalConsoleLog;
    }
  }
}
</script>

<style lang="scss" scoped>
.top-box {
  padding-bottom: 40px;
  .selected-box {
    float: left;
    margin-right: 15px;
  }
  select {
    outline: none;
    font-size: 16px;
  }
}

.code-display-board {
  .orange-button {
    margin-top: 8px;
  }

  pre {
    margin-bottom: 8px;
    font-size: 18px;
  }
}
</style>