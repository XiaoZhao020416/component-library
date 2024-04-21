<template>
  <div class="orange-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
  :style="{width: imageSrc ? '250px' : '100%', height: imageSrc ? '320px' : '100%'}">
    <div class="orange-card__header" v-if="($slots.header || header) && !imageSrc">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="orange-card__body" :style="bodyStyle">
      <img :src="imageSrc" alt="Card Image" v-if="imageSrc" />
      <div :style="{textAlign: imageSrc ? 'center' : 'left'}">
        <slot></slot>
      </div>
      <div class="orange-card__actions" v-if="imageSrc">
        <div v-if="visitors !== 0" class="orange-card__left">{{ visitors }} 浏览量</div>
        <div class="orange-card__right">
          <img :src="currentLikeIcon" @click="toggleLike">
          <img :src="currentCollectIcon" @click="toggleCollect">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-card',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String,
      default: 'hover'
    },
    imageSrc: String,
    size: String,
    visitors: Number,
    initialLiked: {
      type: Boolean,
      default: false
    },
    initialFavorite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imgUrl: {
        like: require('./../../../docs/img/like.svg'),
        collect: require('./../../../docs/img/collect.svg'),
        noLike: require('./../../../docs/img/no-like.svg'),
        noCollect: require('./../../../docs/img/no-collect.svg')
      },
      isLiked: false,
      isCollected: false,
    };
  },
  computed: {
    currentLikeIcon() {
      return this.isLiked ? this.imgUrl.like : this.imgUrl.noLike;
    },
    currentCollectIcon() {
      return this.isCollected ? this.imgUrl.collect : this.imgUrl.noCollect;
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    toggleCollect() {
      this.isCollected = !this.isCollected;
    }
  }
};
</script>
<style lang="scss" scoped>
.orange-card {
  width: 300px;
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  background-color: #FFF;
  overflow: hidden;
  color: #303133;
  -webkit-transition: .3s;
  transition: .3s
}

.orange-card.is-always-shadow,
.orange-card.is-hover-shadow:focus,
.orange-card.is-hover-shadow:hover {
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.orange-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #EBEEF5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box；
}

.orange-card__body {
  padding: 20px;

  img {
    width: 100%;
    margin-bottom: 8px;
  }
}

.orange-card__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #EBEEF5;
  padding-top: 8px;
  margin-top: 8px;

  .orange-card__left {
    margin-top: -7px;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 5px;
  }
}
</style>