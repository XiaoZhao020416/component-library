<template>
  <div class="content-box">
    <h2 class="demo-title">Timeline 时间轴</h2>

    <orange-anchor>
      <orange-anchor-link href="timeline1" title="竖轴样式" />
      <orange-anchor-link href="timeline2" title="横轴样式" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="340" :title="'竖轴样式'" id="timeline1" introduction="点击任务框展开任务详情">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-timeline :items="timelineItems" typeIndex="vertical"/>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(timeline1.code.html) }}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="450" :title="'横轴样式'" id="timeline2" introduction="点击节点展开任务详情">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-timeline :items="timelineNodes" typeIndex="horizontal"/>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(timeline2.code.html) }}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <p class="demo-table-introduction">属性说明如下：</p>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "timeline-demo",
    data() {
      return {
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        timelineItems: [
          {id: 'done', title: 'Finish', content: 'Finished activity', src: require('../assets/timeline/finish.svg')},
          {id: 'doing', title: 'Doing', content: 'Doing activity', src: require('../assets/timeline/doing.svg')},
          {id: 'wait', title: 'Wait', content: 'Waiting activity', src: require('../assets/timeline/wait.svg')}
        ],
        timelineNodes: [
          { id: 'one', left: '20%', color: '#eeba4c', date: '2022-10-01', title: '标题1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 'two', left: '40%', color: '#e74c3c', date: '2023-03-01', title: '标题2', content: "With the development of Internet and the coming of Web2.0 era, more and more data processing and business logic in web development begin to lean to the front end." },
          { id: 'three', left: '60%', color: '#7b3', date: '2023-09-12', title: '标题3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { id: 'four', left: '80%', color: '#409eff', date: '2023-12-10', title: '标题4', content: "This paper studies the development of web front-end based on MVVM mode, and uses the 'Vue.js' to implement the front end of a SPA mall." },
        ],
        timeline1: {
          code: {
            html: `
           <div class="codepadding">
            <orange-timeline :items="timelineItems" typeIndex="vertical"/>
        </div>
        javascript：
        data() {
          return {
            timelineItems: [
              {id: 'done', title: 'Finish', content: 'Finished activity', src: require('finish.svg')},
              {id: 'doing', title: 'Doing', content: 'Doing activity', src: require('doing.svg')},
              {id: 'wait', title: 'Wait', content: 'Waiting activity', src: require('wait.svg')}
            ]
          }
        }
        `
          }
        },
        timeline2: {
          code: {
            html: `
           <div class="codepadding">
            <orange-timeline :items="timelineNodes" typeIndex="horizontal"/>
        </div>
        javascript：
        data() {
          return {
            timelineNodes: [
              { id: 'one', left: '20%', color: '#eeba4c', date: '2022-10-01', title: '标题1', 
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
              { id: 'two', left: '40%', color: '#e74c3c', date: '2023-03-01', title: '标题2', 
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
              { id: 'three', left: '60%', color: '#7b3', date: '2023-09-12', title: '标题3', 
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
              { id: 'four', left: '80%', color: '#409eff', date: '2023-12-10', title: '标题4', 
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
            ]
          }
        }
        `
          }
        },
        api: [
          {
            parameter: "items",
            description: "时间轴节点数组，需要传id表示状态",
            dataTypes: "Array",
            optional: "",
            default: "",
            support: "Timeline"
          },
          {
            parameter: "id",
            description: "items数组配置",
            dataTypes: "String",
            optional: "done, wait, doing",
            default: "",
            support: "Timeline"
          },
          {
            parameter: "title",
            description: "items数组配置-标题",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "Timeline"
          },
          {
            parameter: "content",
            description: "items数组配置-内容",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "Timeline"
          },
          {
            parameter: "typeIndex",
            description: "类型",
            dataTypes: "String",
            optional: "vertical，horizontal",
            default: "",
            support: "Timeline"
          }
        ]
      };
    }
  };
  </script>
  