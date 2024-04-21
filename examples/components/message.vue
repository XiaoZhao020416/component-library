<template>
  <div class="content-box">
    <h2 class="demo-title">Message 消息提示</h2>

    <orange-anchor>
      <orange-anchor-link href="message1" title="基础用法" />
      <orange-anchor-link href="message2" title="不同状态" />
      <orange-anchor-link href="message3" title="可关闭" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <!-- 基础用法DEMO -->
    <orange-demo-block :height="630" :title="'基础用法'" id="message1">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="message" style="border: 1px solid #3a8ee6;">点击消息提示</orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(message1.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- 基础用法DEMO -->
    <orange-demo-block :height="630" :title="'不同状态'" id="message2">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="message" style="border: 1px solid #3a8ee6;">提示</orange-button>
          <orange-button @click="message(`success`)" style="border: 1px solid #2ecc71;color: #2ecc71;">成功</orange-button>
          <orange-button @click="message(`warning`)" style="border: 1px solid #ffa500;color: #ffa500;">警告</orange-button>
          <orange-button @click="message(`error`)" style="border: 1px solid #f56c6c;color: #f56c6c;">错误</orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(message2.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- 基础用法DEMO -->
    <orange-demo-block :height="630" :title="'可关闭'" id="message3">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="message(`info`, true)" style="border: 1px solid #3a8ee6;">点击消息提示</orange-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(message3.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>

<script>
export default {
  name: "message-demo",
  data() {
    return {
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      message1: {
        code: {
          html: `
           <orange-button @click="message">点击消息提示</orange-button>
           javascript:
           methods: {
            message() {
              this.$message({message: "这是一条提示消息", duration: 3000})
            }
           }
           `
        }
      },
      message2: {
        code: {
          html: `
           <orange-button @click="message1">提示</orange-button>
           <orange-button @click="message2">成功</orange-button>
           <orange-button @click="message3">警告</orange-button>
           <orange-button @click="message4">错误</orange-button>
           javascript:
           methods: {
            message1() {
              this.$message({message: "这是一条提示消息", type: "info"})
            },
            message2() {
              this.$message({message: "这是一条成功消息", type: "success"})
            },
            message3() {
              this.$message({message: "这是一条警告消息", type: "warning"})
            },
            message4() {
              this.$message({message: "这是一条错误消息", type: "error"})
            },
           }
           `
        }
      },
      message3: {
        code: {
          html: `
           <orange-button @click="message">点击消息提示</orange-button>
           javascript:
           methods: {
            message() {
              this.$message({message: "这是一条提示消息", duration: 3000, showClose: true})
            }
           }
           `
        }
      },
      api: [
        {
          parameter: "message",
          description: "消息文字",
          dataTypes: "String",
          optional: "",
          default: "提示",
          support: "Message"
        },
        {
          parameter: "type",
          description: "主题",
          dataTypes: "String",
          optional: "info/success/warning/error",
          default: "info",
          support: "Message"
        },
        {
          parameter: "showClose",
          description: "是否显示关闭按钮",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "Message"
        }
      ],
    };
  },

  methods: {
    message(type, showClose) {
      // this.$message({message: "sss", type: type, duration: 3000, showClose: showClose})
      this.$message({message: "这是一条消息提示", type: type, duration: 3000, showClose: showClose})
    }
  }
};
</script>

<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

