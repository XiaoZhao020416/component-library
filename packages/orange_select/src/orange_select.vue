<template>
  <div class="custom-select">
    <div @click="toggleDropdown" :class="[disabled ? 'disabled' : 'selected-options']">
      <span v-if="value === `` || selectedValues.length === 0" >请选择</span>
      <span v-else-if="selectedValues.length > 0">{{ selectedValues.join(",") }}</span>
      <span v-else>{{ selectedValues[0].label }}</span>
      <span style="float: right" v-if="clearable && selectedValues.length !== 0" @click="clear">X</span>
    </div>
    <div class="dropdown-menu" v-show="isDropdownOpen" v-if="!disabled">
      <ul>
        <li v-for="option in options" :key="option.value" @click="selectOption(option)">
          <label>
            <input
                type="checkbox"
                :checked="isOptionSelected(option)"
                :disabled="!multiple && selectedValues.length > 0"
            />
            {{ option.label }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-select',
  props: {
    value: {
      type: [Array, String],
      default: () => []
    },
    options: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedValues: Array.isArray(this.value) ? this.value : [this.value],
      isDropdownOpen: false
    };
  },
  methods: {
    clear() {
      this.selectedValues = []
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      if (this.multiple) {
        const index = this.selectedValues.indexOf(option.value);
        if (index === -1) {
          this.selectedValues.push(option.value);
        } else {
          this.selectedValues.splice(index, 1);
        }
      } else {
        this.selectedValues = [option.value];
      }
      this.$emit('input', this.selectedValues);
      this.isDropdownOpen = false;
    },
    isOptionSelected(option) {
      return this.selectedValues.includes(option.value);
    }
  },
  watch: {
    value(newVal) {
      this.selectedValues = Array.isArray(newVal) ? newVal : [newVal];
    }
  }
};
</script>

<style lang="scss" scoped>
.disabled {
  cursor: not-allowed;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  input {
    opacity: 0.5;
    pointer-events: none;
  }
  span {
    color: #ccc;
  }
}

.custom-select {
  position: relative;
  width: 200px; /* 或者其他你需要的宽度 */
}

.selected-options {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px; /* 或者其他你需要的最大高度 */
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 1;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  list-style-type:none;
  padding: 5px;
}

.dropdown-menu label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown-menu input[type="checkbox"] {
  margin-right: 5px;
}
</style>