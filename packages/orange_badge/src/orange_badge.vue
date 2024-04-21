<template>
    <div :class="['orange-badge', type]">
      <span v-if="!dot" class="badge-value">{{ value }}</span>
      <span v-else-if="dot" class="badge-value is-dot"></span>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrangeBadge',
    props: {
      value: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'default',
      },
      dot: {
        type: Boolean,
        default: false,
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .orange-badge {
    display: inline-block;
    position: relative;
  }
  
  .badge-value {
    position: absolute;
    display: inline-block;
    top: 0;
    right: 9px;
    transform: translateY(-50%) translateX(100%);
    height: 18px;
    background-color: #f56c6c;
    color: #fff;
    border: 1px solid #fff;
    line-height: 18px;
    border-radius: 10px;
    font-size: 12px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    z-index: 10;
  }

  ::v-deep orange-button {
    background-color: #409eff!important;
  }

  .is-dot {
    right: 5px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 0;
  }

  .warning {
    .badge-value {
      background-color: #ffa500;
    }
  }
  
  .primary {
    .badge-value {
      background-color: #409eff;
    }
  }
  
  .danger {
    .badge-value {
      background-color: #f56c6c;
    }
  }
  
  .success {
    .badge-value {
      background-color: #67c23a;
    }
  }

</style>
  