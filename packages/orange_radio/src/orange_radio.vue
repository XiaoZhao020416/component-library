<template>
  <div class="radio-area">
    <div v-if="!buttonStyle" class="radio-group">
      <label v-for="(option, index) in options" :key="index" :disabled="disabled" :class="[disabled ? 'disabled' : '']">
        <input type="radio" :value="option.value" v-model="selectedOption">
        <span>{{ option.label }}</span>
      </label>
    </div>
    <div v-else-if="buttonStyle" class="button-radio-group">
      <label v-for="(option, index) in options" :key="index" :disabled="disabled" class="button-style" :class="{ 'selected': selectedOption === option.value }">
        <input type="radio" :value="option.value" v-model="selectedOption" class="radio-input">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-radio',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    defaultValue: {
      type: String
    }
  },
  data() {
    return {
      selectedOption: this.defaultValue
    };
  }
}
</script>

<style lang="scss" scoped>
.radio-group label {
  margin-right: 24px;
}

.disabled {
  cursor: not-allowed;
  input {
    opacity: 0.5;
    pointer-events: none;
  }
  span {
    color: #ccc;
  }
}

.button-style {
  border: 1px solid #ccc;
  border-right: none;
  padding: 16px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-right: 1px solid #ccc;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.radio-input {
  display: none;
}

.selected {
  background-color: #0075ff;
  color: white;
  border-color: #0075ff;
  border-right: 1px solid #0075ff!important;
}

.button-radio-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
}
</style>
