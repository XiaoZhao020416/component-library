<template>
  <div>
    <div class="progress-container">
      <!-- 纯色条形进度条 -->
      <div v-show="styleType === 'solid'" :class="['solid-bar', type]" :style="{ width: progressBarWidth }">
        <div class="progress-value">{{ stillProgressValue }}%</div>
      </div>
      <!-- 静止条形进度条 -->
      <div v-show="styleType === 'stillness'" :class="['progress-bar', type]">
        <div class="progress-value">{{ progressValue }}%</div>
      </div>
      <!-- 运动条形进度条 -->
      <div v-show="styleType === 'motion'" :class="['progress-bar', type]" :style="{ width: progressBarWidth }">
        <div class="progress-value">{{ stillProgressValue }}%</div>
      </div>
    </div>
    <!-- 环形进度条 -->
    <div :class="['percentloop', type]" v-show="styleType === 'annular'">
      <div class="circle-left">
        <div ref="leftcontent"></div>
      </div>
      <div class="circle-right">
        <div ref="rightcontent"></div>
      </div>
      <div class="number">{{ percent }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-progress',
  props: {
    styleType: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default',
    },
    showPersent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      progressBarWidth: '0%',
      circularValue: 0,
      progressValue: 0,
      stillProgressValue: 0,
      rotation: 0,
      solidValue: 0,

      percent: 0,
      initDeg: 0,
      timeId: null,
      animationing: false,
      percentNum: 80,
      speed: 2, //速度 取值建议在0-3之间
    };
  },
  mounted() {
    this.startProgress();
    this.stillProgress();
  },
  created() {
    this.goRotate(this.transformToDeg(this.percentNum));
  },
  watch: {
    percentNum: function (val) {
      if (this.animationing) return;
      this.goRotate(this.transformToDeg(val)); // Modified this line
    },
  },
  methods: {
    startProgress() {
      let value = 0;
      const intervalId = setInterval(() => {
        if (value >= 100) {
          clearInterval(intervalId);
        } else {
          value++;
          this.progressValue = value;
        }
      }, 100);
    },
    stillProgress() {
      let width = 0;
      let value = 0;
      const intervalId = setInterval(() => {
        if (width >= 100) {
          clearInterval(intervalId);
        } else {
          width++;
          value++;
          this.progressBarWidth = width + '%';
          this.stillProgressValue = value;
        }
      }, 50);
    },
    transformToDeg(percent) {
      let deg = 0;
      if (percent >= 100) {
        deg = 360;
      } else {
        deg = parseInt((360 * percent) / 100);
      }
      return deg;
    },
    transformToPercent(deg) {
      let percent = 0;
      if (deg >= 360) {
        percent = 100;
      } else {
        percent = parseInt((100 * deg) / 360);
      }
      return percent;
    },
    rotateLeft(deg) {
      // 大于180时，执行的动画
      this.$refs.leftcontent.style.transform = "rotate(" + (deg - 180) + "deg)";
    },
    rotateRight(deg) {
      // 小于180时，执行的动画
      this.$refs.rightcontent.style.transform = "rotate(" + deg + "deg)";
    },
    goRotate(deg) {
      this.animationing = true;
      this.timeId = setInterval(() => {
        if (deg > this.initDeg) {
          // 递增动画
          this.initDeg += Number(this.speed);
          if (this.initDeg >= 180) {
            this.rotateLeft(this.initDeg);
            this.rotateRight(180); // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
          } else {
            this.rotateRight(this.initDeg);
          }
        } else {
          // 递减动画
          this.initDeg -= Number(this.speed);
          if (this.initDeg >= 180) {
            this.rotateLeft(this.initDeg);
          } else {
            this.rotateLeft(180); // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
            this.rotateRight(this.initDeg);
          }
        }
        this.percent = this.transformToPercent(this.initDeg); // 百分比数据滚动动画
        const remainer = Number(deg) - this.initDeg;
        if (Math.abs(remainer) < this.speed) {
          this.initDeg += remainer;
          if (this.initDeg > 180) {
            this.rotateLeft(deg);
          } else {
            this.rotateRight(deg);
          }
          this.animationFinished();
        }
      }, 10);
    },
    animationFinished() {
      this.percent = this.percentNum; // 百分比数据滚动动画
      this.animationing = false;
      clearInterval(this.timeId);
      this.$emit("animationFinished"); // 动画完成的回调
    }
  }
};
</script>

<style lang="scss" scoped>
$darkgreen: #4CAF50;
$lightgreen: #2ecc71;
$darkyellow: #af770d;
$lightyellow: #ffa500;
$darkred: #b14646;
$lightred: #f56c6c;
$darkblue: #164779;
$lightblue: #409eff;

.progress-container {
  width: 50%;
  text-align: center;
  border-radius: 10px;
  background-color: #eceff7;
  .progress-bar {
    height: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    background: repeating-linear-gradient(-45deg, $darkgreen, $darkgreen 10px, $lightgreen 10px, $lightgreen 20px);
    background-size: 200% 100%; /* 双倍宽度以确保从0填满的效果 */
    animation: progressAnimation 1s linear infinite; /* 添加动画效果 */
  }

  .solid-bar {
    height: 30px;
    background-color: #4CAF50;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .progress-value {
    font-size: 20px;
    color: #fff;
  }

  @keyframes progressAnimation {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .warning-solid {
    background: $lightyellow;
  }
  .warning {
    background: repeating-linear-gradient(-45deg, $darkyellow, $darkyellow 10px, $lightyellow 10px, $lightyellow 20px);
  }
  .primary-solid {
    background: $lightblue;
  }
  .primary {
    background: repeating-linear-gradient(-45deg, $darkblue, $darkblue 10px, $lightblue 10px, $lightblue 20px);
  }
  .danger-solid {
    background: $lightred;
  }
  .danger {
    background: repeating-linear-gradient(-45deg, $darkred, $darkred 10px, $lightred 10px, $lightred 20px);
  }
  .success-solid, .default-solid {
    background: $lightblue;
  }
  .success, .default {
    background: repeating-linear-gradient(-45deg, $darkgreen, $darkgreen 10px, $lightgreen 10px, $lightgreen 20px);
  }
}

.percentloop {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.percentloop .circle-left, .percentloop .circle-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #67c23a;
  overflow: hidden;
}
.percentloop .circle-left > div,
.percentloop .circle-right > div {
  width: 100%;
  height: 100%;
  background-color: #e5e9f2;
  transform-origin: right center;
}
.percentloop .circle-right {
  left: 50%;
}
.percentloop .circle-right > div {
  transform-origin: left center;
}
.percentloop .number {
  position: absolute;
  top: 7%;
  bottom: 7%;
  left: 7%;
  right: 7%;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
}
</style>