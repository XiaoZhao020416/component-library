<template>
  <div class="content-box">
    <h2 class="demo-title">Carousel 轮播图</h2>

    <orange-anchor>
      <orange-anchor-link href="carousel1" title="基本样式" />
      <orange-anchor-link href="carousel2" title="hover显示" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="360" :title="'基本样式'" id="carousel1"> 
      <template v-slot:demo>
        <div class="codepadding">
          <orange-carousel :carousel-items="carouselItems" :bottomPic="true"/>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(carousel.code.html) }}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="130" :title="'hover显示箭头按钮'" id="carousel2"> 
      <template v-slot:demo>
        <div class="codepadding">
          <orange-carousel :carousel-items="carouselItems" :bottomPic="false" :hoverShow="true"/>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(carousel.code1.html) }}</code>
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
  name: "carousel-demo",
  data() {
    return {
      carouselItems: [
        { imageSrc: require("../assets/carousel/carousel-image1.jpg"), altText: "Image1" },
        { imageSrc: require("../assets/carousel/carousel-image2.jpg"), altText: "Image2" },
        { imageSrc: require("../assets/carousel/carousel-image3.jpg"), altText: "Image3" },
        { imageSrc: require("../assets/carousel/carousel-image4.jpg"), altText: "Image4" }
      ],
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      carousel: {
        code: {
          html: `
         <div class="codepadding">
          <orange-carousel :auto-play="true" :interval="2000" :carousel-items="carouselItems" :bottomPic="true" />
        </div>
        javascript：
        data() {
          return {
            carouselItems: [
              { imageSrc: require("carousel-image1.jpg"), altText: "Image1" },
              { imageSrc: require("carousel-image2.jpg"), altText: "Image2" },
              { imageSrc: require("carousel-image3.jpg"), altText: "Image3" },
              { imageSrc: require("carousel-image4.jpg"), altText: "Image4" }
            ]
          }
        }
        `
        },
        code1: {
          html: `
         <div class="codepadding">
          <orange-carousel :auto-play="true" :interval="2000" :carousel-items="carouselItems" :bottomPic="false" :hoverShow="true"/>
        </div>
        `
        }
      },
      api: [
        {
          parameter: "auto-play",
          description: "是否自动播放",
          dataTypes: "Boolean",
          optional: "true，false",
          default: "false",
          support: "Carousel"
        },
        {
          parameter: "interval",
          description: "轮播间隔时间（毫秒）",
          dataTypes: "Number",
          optional: "",
          default: "2000",
          support: "Carousel"
        },
        {
          parameter: "carousel-items",
          description: "图片路径数组",
          dataTypes: "Array",
          optional: "",
          default: "",
          support: "Carousel"
        },
        {
          parameter: "bottomPic",
          description: "是否显示底部略缩图",
          dataTypes: "Boolean",
          optional: "true，false",
          default: "true",
          support: "Carousel"
        },
        {
          parameter: "hoverShow",
          description: "是否hover显示控制按钮",
          dataTypes: "Boolean",
          optional: "true，false",
          default: "false",
          support: "Carousel"
        }
      ]
    };
  }
};
</script>
