<template>
    <div class="content-box">
      <h2 class="demo-title">Avartar 头像</h2>
  
      <orange-anchor>
        <orange-anchor-link href="Avartar1" title="基本样式" />
        <orange-anchor-link href="Avartar2" title="展示类型" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>
  
      <orange-demo-block :height="650" :title="'基本样式'" id="Avartar1" introduction="通过 shape 和 size 设置头像的形状和大小">
        <template v-slot:demo>
            <div class="codepadding">
                <div class="demo-container">
                    <div style="margin-right: 20px;">
                        <div style="text-align: center;">Circle</div>
                        <div class="display-box">
                            <div v-for="size in sizeList" :key="size" class="avartar-box demo-circle-box">
                                <orange-avartar :shape="'circle'" :src="circleUrl" :size="size"></orange-avartar>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="text-align: center;">Square</div>
                        <div class="display-box">
                            <div v-for="size in sizeList" :key="size" class="avartar-box demo-square-box">
                                <orange-avartar :shape="'suqare'" :src="squareUrl" :size="size"></orange-avartar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(Avartar1.code.html) }}</code>
        </template>
      </orange-demo-block>

      <orange-demo-block :height="280" :title="'展示类型'" id="Avartar2" introduction="支持三种类型：图标、图片和字符"> 
        <template v-slot:demo>
            <div class="codepadding">
                <div class="alt-container">
                    <div class="circle-box">
                        <orange-avartar :shape="'circle'" :alt="'Circle'"></orange-avartar>
                    </div>
                    <div class="square-box">
                        <orange-avartar :shape="'suqare'" :alt="'User'"></orange-avartar>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(Avartar2.code.html) }}</code>
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
    name: "avartar-demo",
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ['small', 'medium', 'default', 'large'],
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        Avartar1: {
          code: {
            html: `
            <div class="codepadding">
                <div class="demo-container">
                    <div style="margin-right: 20px;">
                        <div style="text-align: center;">Circle</div>
                        <div class="display-box">
                            <div v-for="size in sizeList" :key="size" class="avartar-box demo-circle-box">
                                <orange-avartar :shape="'circle'" :src="circleUrl" :size="size"></orange-avartar>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="text-align: center;">Square</div>
                        <div class="display-box">
                            <div v-for="size in sizeList" :key="size" class="avartar-box demo-square-box">
                                <orange-avartar :shape="'suqare'" :src="squareUrl" :size="size"></orange-avartar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          javascript：
          data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ['small', 'medium', 'default', 'large']
            }
          }
          `
          }
        },
        Avartar2: {
          code: {
            html: `
            <div class="codepadding">
                <div class="alt-container">
                    <div class="circle-box">
                        <orange-avartar :shape="'circle'" :alt="'Circle'"></orange-avartar>
                    </div>
                    <div class="square-box">
                        <orange-avartar :shape="'suqare'" :alt="'User'"></orange-avartar>
                    </div>
                </div>
            </div>
          `
          }
        },
        api: [
          {
            parameter: "size",
            description: "设置头像的大小",
            dataTypes: "String",
            optional: "large，medium，small，default",
            default: "default",
            support: "all"
          },
          {
            parameter: "shape",
            description: "设置头像的形状",
            dataTypes: "String",
            optional: "circle，square",
            default: "circle",
            support: "all"
          },
          {
            parameter: "src",
            description: "图片头像的资源地址",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "all"
          },
          {
            parameter: "alt",
            description: "描述图像的替换文本",
            dataTypes: "String",
            optional: "",
            default: "",
            support: "all"
          },
        ]
      };
    }
};
</script>

<style lang="scss" scoped>
.demo-container {
    display: flex;
    align-items: center;
    justify-content: center; 
}
.alt-container {
    display: flex;
    align-items: center;
    justify-content: center; 

    .circle-box {
        margin-right: 50px;
    }
}
.display-box {
    margin-top: 16px;
    display: flex;
    justify-content: left; 
    align-items: center;
}
.avartar-box {
    margin-right: 28px;
    border-right: 1px solid rgba(224,230,237,.5);
    padding-right: 28px;
}
.demo-square-box {
    &:last-child {
        margin-right: 0;
        padding: 0;
        border: none;
    }
}
.demo-circle-box {
    &:last-child {
        margin-right: 0;
    }
}
</style>
  