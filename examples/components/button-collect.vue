<template>
  <div class="content-box">
    <h2 class="demo-title">动态按钮</h2>

    <orange-anchor>
      <orange-anchor-link href="button-Run" title="Run按钮" />
      <orange-anchor-link href="button-Rocket" title="Rocket按钮" />
      <orange-anchor-link href="button-Reflect" title="Reflect按钮" />
      <orange-anchor-link href="button-overlap" title="Overlap按钮" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="100" :title="'Run按钮'" id="button-Run" introduction="点击切换奔跑🏃动作">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-run-button :active="Runactive" @click="runtest()" />
          <orange-run-button
            RunText="奔跑‍"
            IngText="奔跑中ing～"
            :active="Runactive"
            @click="runtest()"
          />
          <orange-input placeholder="🏃‍♀️奔跑时间/秒" style="float:right" v-model="runinput" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(run.code.html)}}</code>
      </template>
    </orange-demo-block>
    <orange-demo-block
      :height="100"
      :title="'Rocket按钮'"
      id="button-Rocket"
      introduction="通过设置飞行时间来模拟任务完成时的事件回调"
    >
      <template v-slot:demo>
        <div class="codepadding">
          <orange-rocket-button :active.sync="rockactive" @click="rocktest()" />
          <orange-input placeholder="🚀飞行时间/秒" style="float:right" v-model="input" />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(rocket.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 线性按钮 -->
    <orange-demo-block
      :height="80"
      :title="'Reflect按钮'"
      id="button-Reflect"
      introduction="按钮悬浮产生反射效果"
    >
      <template v-slot:demo>
        <orange-reflect-button @click="test()">镜面反射</orange-reflect-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(reflect.code.html)}}</code>
      </template>
    </orange-demo-block>
    <!-- 禁用DEMO -->
    <orange-demo-block
      :height="80"
      :title="'Overlap按钮'"
      id="button-overlap"
      introduction="按钮悬浮产生重叠效果"
    >
      <template v-slot:demo>
        <orange-overlap-button @click="test()">hover重叠</orange-overlap-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(overlap.code.html)}}</code>
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
  name: "shn-button-demo",
  data() {
    return {
      input: "",
      runinput: "",

      Runactive: false,
      rockactive: false,
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      run: {
        code: {
          html: `
         <orange-run-button :active="active" @click="test()"/>
          <orange-run-button RunText="奔跑‍" IngText="奔跑中ing～" :active="active" @click="test()"/>
          `
        }
      },
      rocket: {
        code: {
          html: `
          <orange-rocket-button :active.sync="rockactive" @click="rocktest()" />
          <orange-input placeholder="🚀飞行时间/秒" style="float:right" v-model="input" />
          `
        }
      },
      reflect: {
        code: {
          html: `
        <orange-reflect-button @click="test()">镜面反射</orange-reflect-button>

          `
        }
      },
      overlap: {
        code: {
          html: `
                 <orange-overlap-button @click="test()">hover重叠</orange-overlap-button>
          `
        }
      },
      api: [
        {
          parameter: "active",
          description: "控制是否切换奔跑中状态🏃/控制是🚀是否完成状态",
          dataTypes: "Boolean",
          optional: "true/false",
          default: "false",
          support: "Run按钮/Rocket按钮"
        },
        {
          parameter: "RunText",
          description: "奔跑前按钮",
          dataTypes: "String",
          optional: "",
          default: "Run",
          support: "Run按钮"
        },
        {
          parameter: "IngText",
          description: "奔跑后按钮",
          dataTypes: "String",
          optional: "",
          default: "Ing",
          support: "Run按钮"
        },
      ]
    };
  },

  methods: {
    test() {
      console.log("点击");
    },

    runtest() {
      this.Runactive = true;
      setTimeout(() => {
        this.Runactive = false;
      }, this.runinput * 1000 || 1000);
    },
    rocktest() {
      setTimeout(() => {
        this.rockactive = true;
      }, this.input * 1000 || 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.codepadding {
  padding: 7px;
}
</style>

