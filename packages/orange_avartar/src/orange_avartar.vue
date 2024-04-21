<template>
  <div class="avartar-area">
    <div class="avartar-circle-box" v-if="shape == 'circle' && src !== ''">
      <img v-if="size == 'large'" :src="src" class="large">
      <img v-else-if="size == 'default'" :src="src" class="default">
      <img v-else-if="size == 'medium'" :src="src" class="medium">
      <img v-else-if="size == 'small'" :src="src" class="small">
    </div>
    <div class="avartar-circle-box" v-if="shape == 'circle' && src === ''">
      <div v-if="size == 'large'" class="circle-box large">{{ alt }}</div>
      <div v-if="size == 'default'" class="circle-box default">{{ alt }}</div>
      <div v-if="size == 'medium'" class="circle-box medium">{{ alt }}</div>
      <div v-if="size == 'small'" class="circle-box small">{{ alt }}</div>
    </div>
    <div class="avartar-square-box" v-if="shape == 'suqare' && src !== ''">
      <img v-if="size == 'large'" :src="src" class="large">
      <img v-else-if="size == 'default'" :src="src" class="default">
      <img v-else-if="size == 'medium'" :src="src" class="medium">
      <img v-else-if="size == 'small'" :src="src" class="small">
    </div>
    <div class="avartar-square-box" v-if="shape == 'suqare' && src === ''">
      <div v-if="size == 'large'" class="square-box large">{{ alt }}</div>
      <div v-if="size == 'default'" class="square-box default">{{ alt }}</div>
      <div v-if="size == 'medium'" class="square-box medium">{{ alt }}</div>
      <div v-if="size == 'small'" class="square-box small">{{ alt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-avartar',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    shape: {
      type: String,
      default: 'circle'
    },
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
.large {
  width: 50px;
  height: 50px;
  font-size: 16px;
  border-radius: 50px;
  line-height: 50px;
}
.default {
  width: 40px;
  height: 40px;
  font-size: 14px;
  border-radius: 40px;
  line-height: 40px;
}
.medium {
  width: 36px;
  height: 36px;
  border-radius: 36px;
  font-size: 14px;
  line-height: 36px;
}
.small {
  width: 28px;
  height: 28px;
  border-radius: 28px;
  font-size: 12px;
  line-height: 28px;
}

.circle-box, .square-box {
  background-color: #c0c4cc;
  color: #fff;
  text-align: center;
}

.square-box {
  border-radius: 4px;
}
</style>
