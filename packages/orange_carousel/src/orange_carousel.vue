<template>
  <div class="orange-carousel">
    <div class="orange-carousel__container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="orange-carousel__track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in carouselItems" :key="index" class="orange-carousel__item">
          <img :src="item.imageSrc" :alt="item.altText" class="orange-carousel__image" />
        </div>
      </div>
    </div>
    <button v-if="!hoverShow || isMouseOver" @click="prevSlide" class="orange-carousel__button orange-carousel__button--prev" :style="{ top: bottomPic ? '40%' : '50%' }">&#8249;</button>
    <button v-if="!hoverShow || isMouseOver" @click="nextSlide" class="orange-carousel__button orange-carousel__button--next" :style="{ top: bottomPic ? '40%' : '50%' }">&#8250;</button>
    <!-- 底部分页圆点 -->
    <div class="orange-carousel__pagination" :style="{ bottom: bottomPic ? '80px' : '20px' }">
      <span
        v-for="(item, index) in carouselItems"
        :key="index"
        @click="goToSlide(index)"
        :class="{ 'active': index === currentIndex }"
        class="orange-carousel__dot"
      ></span>
    </div>
    <!-- 底部略缩图 -->
    <div class="orange-carousel__thumbnail" v-show="bottomPic">
      <div v-for="(item, index) in carouselItems" :key="index" @click="goToThumbnail(index)" class="orange-carousel__thumbnail-item">
        <img :src="item.imageSrc" :alt="item.altText" class="orange-carousel__thumbnail-image" :class="{ 'active': index === thumbnailIndex }" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'orange-carousel',
  props: {
    carouselItems: { // 图片数组
      type: Array,
      required: true
    },
    autoPlay: { // 自动播放
      type: Boolean,
      default: true
    },
    hoverShow: { // hover显示
      type: Boolean,
      default: false
    },
    interval: { // 播放间隔
      type: Number,
      default: 2000
    },
    bottomPic: { // 底部图片
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoPlayInterval: null,
      isMouseOver: false,
      thumbnailIndex: 0 // 底部缩略图的索引
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  methods: {
    handleMouseEnter() {
      if (this.hoverShow) {
        this.isMouseOver = true;
      }
    },
    handleMouseLeave() {
      if (this.hoverShow) {
        this.isMouseOver = false;
      }
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
      this.thumbnailIndex = this.currentIndex;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
      this.thumbnailIndex = this.currentIndex;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        if (this.autoPlay) {
          this.nextSlide();
        }
      }, this.interval); // 设置自动播放间隔，单位为毫秒
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
    toggleAutoPlay() {
      this.autoPlay = !this.autoPlay;
    },
    // 当点击分页圆点时跳转到相应的页
    goToSlide(index) {
      this.currentIndex = index;
      this.stopAutoPlay(); // 停止自动播放，以防与手动操作冲突
    },
    // 点击底部缩略图时切换到对应图片
    goToThumbnail(index) {
      this.currentIndex = index;
      this.thumbnailIndex = index;
      this.stopAutoPlay();
    }
  }
};
</script>

  
<style lang="scss" scoped>
.orange-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  .orange-carousel__container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  .orange-carousel__track {
    display: flex;
    width: 100%;
  }
  .orange-carousel__item {
    flex: 0 0 100%;
  }
  .orange-carousel__image {
    width: 50%;
    height: auto;
  }
  .orange-carousel__button {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    font-size: 50px;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .orange-carousel__button--prev {
    left: 10px;
  }
  .orange-carousel__button--next {
    left: 365px;
  }
  .orange-carousel__pagination {
    position: absolute;
    bottom: 80px;
    left: 25%;
    transform: translateX(-50%);
    display: flex;
  }

  .orange-carousel__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .orange-carousel__dot.active {
    background-color: #409eff;
  }

  .orange-carousel__thumbnail {
    margin-top: -5px;
    display: flex;
    width: 50%;
    // background-color: #eceff7;
  
    .orange-carousel__thumbnail-item {
      margin: 0 1px;
      margin-top: 5px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
  
      img {
        width: 94px;
        height: auto;
        border: 2px solid transparent;
        border-radius: 5px;
  
        &.active {
          border-color: #409eff;
        }
      }
    }

    .orange-carousel__thumbnail-item:nth-child(1) {
      margin-left: 0;
    }
  }
}
</style>
  