<!-- 目录 -->
<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <i class="iconfont org-icon-icon_dingtalk_line" style="margin: 0 10px;font-size: 32px;color: #409eff"></i>
        <span class="title">COMPONENT-LIBRARY</span>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <ul>
          <li :key="item_1.title" class="nav-item" v-for="item_1 in ul_data">
            <a>{{item_1.title}}</a>
            <ul class="pure-menu-list" v-if="item_1.li_data.length != 0">
              <li :key="item_2.path" class="nav-item" v-for="item_2 in item_1.li_data">
                <div class="nav-group__title" v-if="item_2.group">{{item_2.group}}</div>
                <a
                  :class="{'active':active == item_2.id}"
                  :href="item_2.path"
                  @click="active = item_2.id"
                >{{item_2.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="content" id="router_view_box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 1,
      ul_data: [
        {
          title: "开发指南",
          li_data: [
            { id: -1, name: "安装/快速上手", path: "#/component/installation" },
            { id: -2, name: "Icon 图标", path: "#/component/icon" }
          ]
        },
      
        {
          title: "组件",
          li_data: [
            {
              id: "001",
              group: "按钮",
              name: "Button 按钮",
              path: "#/component/button"
            },
            {
              id: "002",
              name: "动态按钮",
              path: "#/component/button-collect"
            },
            {
              id: "003",
              group: "基础组件",
              name: "Base 基础组件",
              path: "#/component/base"
            },
            {
              id: "007",
              group: "复杂组件",
              name: "Badge 标记",
              path: "#/component/badge"
            },
            {
              id: "004",
              name: "Progress 进度条",
              path: "#/component/progress"
            },
            {
              id: "005",
              name: "Timeline 时间轴",
              path: "#/component/timeline"
            },
            {
              id: "006",
              name: "Carousel 轮播图",
              path: "#/component/carousel"
            },
            {
              id: "008",
              name: "Clipboard 剪贴板",
              path: "#/component/clipboard"
            },
            {
              id: "011",
              name: "Comment 评论区",
              path: "#/component/comment"
            },
            {
              id: "009",
              name: "右键菜单",
              path: "#/component/menu"
            },
            {
              id: "010",
              name: "代码编辑器",
              path: "#/component/code"
            },
            {
              id: "012",
              group: "Table 表单组件",
              name: "头像",
              path: "#/component/avartar"
            },
            {
              id: "013",
              name: "输入框",
              path: "#/component/input"
            },
            {
              id: "014",
              name: "单选框",
              path: "#/component/radio"
            },
            {
              id: "015",
              name: "多选框",
              path: "#/component/checkbox"
            },
            {
              id: "016",
              name: "选择器",
              path: "#/component/select"
            },
            {
              id: "017",
              name: "弹窗",
              path: "#/component/dialog"
            },
            {
              id: "019",
              name: "消息提示",
              path: "#/component/postMessage"
            },
            {
              id: "020",
              group: "图表组件",
              name: "Chart 图表",
              path: "#/component/chart"
            },
          ]
        },
      ],
      sidebarHover: false
    };
  },
  watch: {
    $route: function(to, from) {
      if (from.path != to.path) {
        document.documentElement.scrollTop = 0;
      }
    }
  },
  mounted() {
    switch (this.$router.history.current.fullPath) {
      case "/component/installation":
        this.active = -1;
        break;
      case "/component/icon":
        this.active = -2;
        break;
      case "/component/input":
        this.active = "100";
        break;
      case "/component/statistic":
        this.active = "200";
        break;
      case "/component/img-card":
        this.active = "201";
        break;
      case "/component/collapse":
        this.active = "300";
        break;
      case "/component/backtop":
        this.active = "301";
        break;
      case "/component/button":
        this.active = "000";
        break;
      case "/component/shadow":
        this.active = "001";
        break;
      case "/component/footertoolbar":
        this.active = "302";
        break;
      case "/component/drawer":
        this.active = "303";
        break;
      case "/component/uploadimg":
        this.active = "101";
        break;
      case "/component/anchor":
        this.active = "304";
        break;
      case "/component/divider":
        this.active = "305";
        break;
      case "/component/meunsimple":
        this.active = "306";
        break;
      case "/component/model-mask":
        this.active = "202";
        break;
      case "/component/date-picker":
        this.active = "102";
        break;
      case "/component/country-picker":
        this.active = "103";
        break;
      case "/component/widget-modal":
        this.active = "307";
        break;
      case "/component/vue-drag-resize":
        this.active = -100;
        break;
      case "/component/vue-cropper":
        this.active = -99;
        break;
      case "/component/vue-cookies":
        this.active = -101;
        break;
      case "/component/vue-word-cloud":
        this.active = -102;
        break;
      case "/component/vue-status-indicator":
        this.active = -103;
        break;
      case "/component/epic-spinners":
        this.active = -104;
        break;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  z-index: 999;
  width: 100%;
  height: 100%;
  .header {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    .container {
      height: 100%;
      width: 1140px;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #dcdfe6;
      .title {
        // color: $--color-primary;
        color: #409eff;
        font-size: 26px;
        font-weight: 500;
        font-family: "微软雅黑";
      }
    }
  }
  .main {
    position: relative;
    width: 1140px;
    height: -webkit-calc(100% - 80px);
    height: -moz-calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    top: 80px;
    display: flex;
    // transform: translate(0, 0);
    // overflow: auto;
    // visibility: hidden;
    // &:focus,
    // &:hover {
    //   visibility: visible;
    // }
    .sidebar {
      position: fixed;
      margin-right: 40px;
      width: 230px;
      height: 80%;
      top: 100px;
      visibility: hidden;
      overflow: auto;
      z-index: 9999;
      &:hover {
        visibility: visible;
      }
      > ul {
        visibility: visible;
      }
      .nav-item {
        list-style: none;
        a {
          font-size: 15px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          display: block;
          position: relative;
          transition: 0.15s ease-out;
          font-weight: 700;
        }
        .nav-group__title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
        .pure-menu-list {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            &:hover {
              color: #409eff;
            }
          }
          .active {
            color: #409eff;
          }
        }
      }
    }
    .content {
      flex: 1;
      width: 100%;
      padding: 0 50px 0 10px;
      margin-left: 240px;
    }
  }
}
</style>

