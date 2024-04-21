<template>
  <div class="container">
    <!-- 竖轴样式 -->
    <ul class="timeline" v-if="typeIndex === 'vertical'">
      <li v-for="(item, index) in items" :key="index" class="timeline">
        <img class="icon" :src="item.src">
        <details class="panel">
          <summary>{{ item.title }}</summary>
          <p :id="item.id">{{ item.content }}</p >
        </details>
      </li>
    </ul>
    <!-- 横轴样式 -->
    <div id="timeline" v-else-if="typeIndex === 'horizontal'">
      <div v-for="(node, index) in items" :key="index" class="dot" :style="{ left: node.left, backgroundColor: node.color }" @click="showArticle(node.id)">
        <span class="white-point"></span>
        <span class="date">{{ node.title }}</span>
      </div>
    </div>
    <article v-for="(node, index) in items" :key="index" v-show="selectedArticle === node.id">
      <h2>{{ node.title }}</h2>
      <h3 class="date">{{ node.date }}</h3>
      <p>{{ node.content }}</p>
    </article>
  </div>
</template>
  
<script>
  export default {
    name: "OrangeTimeline",
    props: {
      items: {
        type: Array,
        required: true
      },
      typeIndex: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        selectedArticle: null,
      };
    },
    methods: {
      showArticle(articleId) {
        this.selectedArticle = articleId;
      }
    },
  };
</script>
  
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600');

  $wht    : #fff;
  $blk    : #000;
  $border : lighten($blk,85);
  $bg     : darken($wht,2);
  
  body{
    font-family: 'Raleway', sans-serif;
    background:$bg;
  }
  
  .timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
    
    &:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: "";
      width: 3px;
      background-color: $border;
      margin-left: -1.5px;
      left: 20px;
      
      @media (min-width: 576px) {
        left: 50%;
      }
    }
    
    > li {
      margin-bottom: 20px;
      position: relative;
      padding-left:55px;
      
      &:after, &:after {
        content: "";
        display: table;
        clear: both;
      }
      
      .panel {
        width: 100%;
        float: left;
        border-radius: 3px;
        overflow:hidden;
        position: relative;
        background:$wht;
        box-shadow: 1px 2px 80px 0 rgba($blk, 0.1);
        
        summary{
          display:block;
          user-select: none;
          outline:none;
          padding:20px;
          margin-bottom:0px;
          transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
          transition-property: margin, background;
          font-weight:600;
          
          &::-webkit-details-marker { display:none; }
          
          &:hover{
            background:rgba($blk, 0.1);
          }
        }
        
        p{
          padding:0 20px 10px;
        }
        
        &[open] summary{
          margin-bottom:20px;
          padding-bottom:20px;
          border-bottom:1px solid rgba($blk, 0.1);
        }
      }
      
      @media (min-width: 576px) {
        padding-left:0px;
        
        .panel {
          width: 50%;
        }
        
        &:not(:nth-child(even)) {
          padding-right: 90px;
        }
  
        &:nth-child(even) {
          padding-left: 90px;
          > :nth-child(even) {
            float: right;
          }
        }
      }
    
      > {
        .icon {
          color: $border;
          width: 40px;
          height: 40px;
          line-height: 50px;
          font-size: 2.5em;
          text-align: center;
          position: absolute;
          left: 20px;
          margin-left: -25px;
          background-color: $bg;
          border-radius: 50%;
          
          @media (min-width: 576px) {
            left: 50.5%;
          }
          
        }
      }
    }
  }
  div#timeline {
    background-color: #d8d8d8;
    margin: 40px 0 ;
    height: 5px;
    width: 100%;
    position: relative;
    .dot {
      z-index: 99;
      transition : 0.3s ease-in-out;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: -15px;
      text-align: center;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
      .date {
        left: -8px;
        width: 60px;
        font-size: 1.1rem;
        display: block;
        position: relative;
        top: 10px;
        text-align: center;
      }
      .white-point {
        display: inline-block;
        margin-top: 10px;
        width: 20px;
        height: 20px;
        background-color: #fff;
        position: relative;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
      }
    }
  }
  article {
    max-width : 960px;
    background-color: #fff;
    padding: 20px;
    margin-top: -60px;
    date {
      display: block;
      text-align: right;
    }
    h2 {
      font-size: 4.5rem;
      padding: 10px 0;
      border-bottom: solid #111 2px;
      margin-bottom: 20px;
    }
    p {
      line-height: 25px;
    }
  }
  div.mask {
    display: none;
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 99999;
    article {
      position: relative;
      top: -100%;
      margin-top: 50px;
      max-width : 960px;
      background-color: #fff;
      padding: 20px;
      margin: auto;
      box-shadow: 0 0 30px rgba(0,0,0,0.4);
      date {
        display: block;
        text-align: right;
      }
      h2 {
        font-size: 5rem;
        padding: 10px 0;
        border-bottom: solid #111 2px;
        margin-bottom: 20px;
      }
      p {
        line-height: 130%;
      }
    }
  }
</style>