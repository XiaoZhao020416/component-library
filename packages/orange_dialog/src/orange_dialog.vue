<template>
  <div v-if="visible" class="my-dialog">
    <div class="my-dialog-header">
      <slot name="header">
        <span>{{ title }}</span>
        <span class="close-button" @click="handleClose">
          X
        </span>
      </slot>
    </div>
    <div class="my-dialog-content">
      <slot></slot>
    </div>
    <div class="my-dialog-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
      // 或者你可以直接修改 props，但通常不推荐直接修改 props
      // this.visible = false;
    }
  }
};
</script>

<style scoped>
.my-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
  overflow: auto; /* 允许滚动条，如果内容过多 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-height: 100px;
  min-width: 400px;
}

.my-dialog-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.my-dialog-content {
  padding: 20px;
}

.my-dialog-footer {
  padding: 10px;
  text-align: right;
  border-top: 1px solid #eee;
}
</style>