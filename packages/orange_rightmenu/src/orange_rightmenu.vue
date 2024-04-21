<template>
  <div class="context-menu" ref="contextMenu">
    <div class="context-menu-list" ref="menuItemsContainer">
      <div v-for="(menuItem, menuItemIndex) in contextMenuOptions" :key="menuItemIndex" id="context-menu-list-item" :class="[{ 'disabled': menuItem.disabled, 'hidden': menuItem.hidden }]"
      @mouseenter="handleMenuItemHover(menuItem.label)" @mouseleave="handleMenuItemLeave">
        <!-- 第一次文本 -->
        <div class="label" @click="handleLabelClick(menuItem.action)">{{ menuItem.label }}</div>
        <!-- 第一层快捷键 -->
        <div class="shortcut">{{ menuItem.shortcut }}</div>
        <!-- 移动图标 -->
        <div v-if="menuItem.label==='移动'" class="icon">▶</div>
        <!-- 移动下级菜单 -->
        <div v-if="menuItem.submenu" class="context-menu-children" :style="{ display: submenuVisible ? 'block' : 'none' }">
          <div class="context-menu-list">
            <div v-for="(submenuItem, submenuItemIndex) in menuItem.submenu" :key="submenuItemIndex" id="context-menu-list-item" :class="{ 'disabled': submenuItem.disabled, 'hidden': submenuItem.hidden }">
              <div class="label" @click="handleLabelClick(submenuItem.action)">{{ submenuItem.label }}</div>
              <div class="shortcut">{{ submenuItem.shortcut }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'orange-rightmenu',
  props: {
    copiedItem: {
      type: Object,
      default: null,
    },
    position: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      submenuVisible: false,
      contextMenuOptions: [
        { label: '复制', action: 'copy', disabled: false, hidden: false, shortcut: 'Ctrl+C' },
        { label: '粘贴', action: 'paste', disabled: true, hidden: false, shortcut: 'Ctrl+V' },
        { label: '删除', action: 'delete', disabled: false, hidden: false, shortcut: 'Ctrl+D' },
        { label: '剪切', action: 'cut', disabled: false, hidden: false, shortcut: 'Ctrl+X' },
        { label: '移动', action: 'move', disabled: false, hidden: false, submenu: [
          { label: '上移', action: 'moveUp', disabled: false, hidden: false, shortcut: 'Cmd+up' },
          { label: '下移', action: 'moveDown', disabled: false, hidden: false, shortcut: 'Cmd+down' },
          { label: '置顶', action: 'moveTop', disabled: false, hidden: false },
          { label: '置底', action: 'moveBottom', disabled: false, hidden: false }
        ]}
      ],
    };
  },
  watch: {
    position(newPosition) {
      this.updatePosition(newPosition);
    },
    copiedItem(newCopiedItem) {
      this.updatePasteMenuItem(newCopiedItem);
    }
  },
  mounted() {
    // 监听鼠标位置
    if(this.position) {
      this.updatePosition(this.position);
    }
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // 显示下级菜单
    handleMenuItemHover(label) {
      if (label === '移动') {
        this.submenuVisible = true;
      }
    },
    // 隐藏下级菜单
    handleMenuItemLeave() {
      this.submenuVisible = false;
    },
    // 更新位置
    updatePosition(newPosition) {
      const contextMenu = this.$refs.contextMenu;
      contextMenu.style.top = newPosition.y + 'px';
      contextMenu.style.left = newPosition.x + 'px';
    },
    // 处理滚动事件
    handleScroll() {
      // 隐藏右键菜单
      this.$emit('showRightMenu', false);
      // 移除滚动事件监听，防止多次触发
      window.removeEventListener('scroll', this.handleScroll);
    },
    // 右键菜单操作
    handleLabelClick(action) {
      this.$emit(action);
    },
    // 修改粘贴的禁用状态为正常显示
    updatePasteMenuItem(newCopiedItem) {
      // 如果复制内容不为空，将对应的 label 的 disabled 设置为 false
      if (newCopiedItem !== null) {
        console.log(this.contextMenuOptions);
        this.contextMenuOptions.splice(1, 1);
        console.log(this.contextMenuOptions);
        this.$forceUpdate();
      }
    }
  }
};
</script>

  
<style lang="scss" scoped>
.context-menu {
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.067) 0 4px 10px;
  z-index: 9999;

  .context-menu-list {
    position: relative;
    min-width: 150px;
    max-width: 190px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.88);
    user-select: none;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid rgb(229, 230, 235);
    z-index: 100;

    #context-menu-list-item {
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 6px 12px;
      cursor: pointer;
      height: 32px;
      box-sizing: border-box;
      z-index: 99;
    }
    #context-menu-list-item:hover {
      background-color: #f0f0f0;
    }
    #context-menu-list-item.disabled {
      cursor: not-allowed;
      color: rgba(0, 0, 0, 0.38);
    }
    #context-menu-list-item.hidden {
      display: none;
    }
  }

  .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .shortcut {
    margin-left: auto;
    font-size: 12px;
    color: rgb(153, 153, 153);
    transform: scale(0.85);
  }

  .icon {
    margin-left: auto;
    color: rgb(187, 187, 187);
    transform: scale(0.6, 0.8);
  }

  .context-menu-children {
    display: none;
    position: absolute;
    top: 0;
    right: calc(-100% - 10px);
    padding-left: 144px;
  }

  .context-menu-children .context-menu-list {
    box-shadow: rgba(0, 0, 0, 0.067) 0px 4px 10px;
  }
}
</style>
  