<template>
  <div
      :class="[`message`, type]"
      :style="{ top: `${topOffset}px` }"
      v-show="visible"
  >
    <div>
    </div>
    <p>{{ message }}</p >
    <span class="close-btn" v-if="showClose" @click="close">×</span>
  </div>
</template>

<script>
export default {
  name: "orange-message",
  data() {
    return {
      visible: false,
      message: "",
      duration: 300,
      onClose: null,
      closed: false,
      topOffset: 0,
      timer: null
    };
  },
  watch: {
    // 监听closed的变化，设置为true时，将组件销毁
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style scoped>
.message {
  z-index: 99;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 40px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #3a8ee6;
  color: #3a8ee6;
  transition: top 0.3s ease-out;
  font-size: 16px;
}

.success {
  color: #2ecc71;
  border: 1px solid #2ecc71;
}

.warning {
  color: #ffa500;
  border: 1px solid #ffa500;
}

.error {
  color: #f56c6c;
  border: 1px solid #f56c6c;
}

.close-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>