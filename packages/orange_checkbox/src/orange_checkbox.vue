<template>
  <div class="checkbox-area">
    <div v-if="!buttonStyle" class="checkbox-group">
      <label v-for="(option, index) in options" :key="index" :disabled="isDisabled(option.value)" :class="[isDisabled(option.value) ? 'disabled' : '']">
        <input type="checkbox" :value="option.value" v-model="selectedOptions">
        <span>{{ option.label }}</span>
      </label>
    </div>
    <div v-else-if="buttonStyle" class="button-checkbox-group">
      <label v-for="(option, index) in options" :key="index" :disabled="isDisabled(option.value)" class="button-style" :class="{ 'selected': isSelected(option.value) }">
        <input type="checkbox" :value="option.value" v-model="selectedOptions" class="checkbox-input">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-checkbox',
  props: {
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    minSelection: {
      type: Number,
      default: 0
    },
    maxSelection: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      selectedOptions: this.defaultValue
    };
  },
  methods: {
    isSelected(optionValue) {
      return this.selectedOptions.includes(optionValue);
    },
    isDisabled(optionValue) {
      return this.selectedOptions.length >= this.maxSelection && !this.isSelected(optionValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-group label {
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

.checkbox-input {
  display: none;
}

.selected {
  background-color: #0075ff;
  color: white;
  border-color: #ccc;
}

.button-checkbox-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
}
</style>
