<template>
    <div class="content-box">
      <h2 class="demo-title">右键菜单</h2>
  
      <orange-anchor>
        <orange-anchor-link href="menu" title="右键菜单" />
        <orange-anchor-link href="api" title="API" />
      </orange-anchor>
  
      <orange-demo-block :height="1900" :title="'右键菜单'" id="menu"> 
        <template v-slot:demo>
          <div class="context-menu-container">
            <h4>
              <span>复制：ctrl+c</span>
              <span>剪切：ctrl+x</span>
              <span>粘贴：ctrl+v</span>
              <span>删除：Backspace</span>
            </h4>
            <h4>
              <span>选择上一个：↑</span>
              <span>选择下一个：↓</span>
            </h4>
            <div v-for="(item, index) in items" :key="index" class="context-menu-container-item"
            :class="{ 'context-menu-container-item-selected': selectedIndex === index, 
            'context-menu-container-item-hover': isHovered === index }" @click="selectItem(index)"
            @mouseover="setHovered(index, true)" @mouseleave="setHovered(index, false)"
            @contextmenu.prevent="showMenu(index)">
              {{ item.label }}
            </div>
          </div>
          <orange-rightmenu :position="rightMenuPosition" v-if="showRightMenu" @showRightMenu="hideMenu"
          @copy="copyItem" @paste="pasteItem" @delete="deleteItem" @cut="cutItem" 
          @moveUp="moveItem(-1)" @moveDown="moveItem(1)" :copiedItem="copiedItem"
          @moveTop="moveToTopOrBottom('top')" @moveBottom="moveToTopOrBottom('bottom')" />
        </template>
        <template v-slot:code>
          <code class="html">{{ fCode(menu.code.html) }}</code>
        </template>
      </orange-demo-block>
  
      <!-- API -->
      <div id="api">
        <h3 class="demo-table-title">API</h3>
        <p class="demo-table-introduction">属性说明如下：</p>
        <orange-table-simple :data="api" :thead="thead" />
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "menu-demo",
    data() {
      return {
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        menu: {
          code: {
            html: `
            <div class="context-menu-container">
            <h4>
              <span>复制：ctrl+c</span>
              <span>剪切：ctrl+x</span>
              <span>粘贴：ctrl+v</span>
              <span>删除：Backspace</span>
            </h4>
            <h4>
              <span>选择上一个：↑</span>
              <span>选择下一个：↓</span>
            </h4>
            <div v-for="(item, index) in items" :key="index" class="context-menu-container-item"
            :class="{ 'context-menu-container-item-selected': selectedIndex === index, 
            'context-menu-container-item-hover': isHovered === index }" @click="selectItem(index)"
            @mouseover="setHovered(index, true)" @mouseleave="setHovered(index, false)"
            @contextmenu.prevent="showMenu(index)">
              {{ item.label }}
            </div>
        </div>
        <orange-rightmenu :position="rightMenuPosition" v-if="showRightMenu" @showRightMenu="hideMenu"/>

        javascript: 
        data() {
          return {
            selectedIndex: null, // 选中 item
            isHovered: null, // hover item
            showRightMenu: false, // 组件显示
            rightMenuPosition: { x: 0, y: 0 } // 组件位置
          }
        },
        methods: {
          selectItem(index) {
            this.selectedIndex = index;
            this.isHovered = null;
          },
          setHovered(index, value) {
            this.isHovered = value ? index : null;
          },
          showMenu(index) {
            this.selectItem(index);
            this.showRightMenu = true;
            this.rightMenuPosition = { x: event.clientX, y: event.clientY };
            document.addEventListener('click', this.hideMenu);
          },
          hideMenu() {
            this.showRightMenu = false;
            document.removeEventListener('click', this.hideMenu);
          }
        }

        scss:
        <style lang="scss" scoped>
        .context-menu-container {
          position: relative;
          width: 700px;
          min-height: 300px;
          padding: 15px;
          margin: 0 auto;
          background-color: rgba(102, 255, 102, 0.2);

          &-item {
            cursor: pointer;
            padding: 20px;
            margin: 20px;
            background-color: #fff;
          }
          &-hover {
            outline: rgb(30, 161, 85) dashed 2px;
          }
          &-selected {
            outline: rgb(30, 161, 85) solid 2px;
          }
          h4 {
            text-align: center;
          }
          span {
            margin-right: 15px;
          }
          span:last-child {
            margin-right: 0;
          }
        }
        </style>
          `
          }
        },
        api: [
          {
            parameter: "auto-play",
            description: "是否自动播放",
            dataTypes: "Boolean",
            optional: "true，false",
            default: "false",
            support: "Carousel"
          },
        ],
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
        ],
        selectedIndex: null, // 选中 item
        isHovered: null, // hover item
        showRightMenu: false,
        rightMenuPosition: { x: 0, y: 0 },
        copiedItem: null
      };
    },
    mounted() {
      // 监听键盘快捷键事件
      document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
      // 移除键盘快捷键监听
      document.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
      // 选中item
      selectItem(index) {
        this.selectedIndex = index;
        this.isHovered = null;
      },
      // 设置悬停效果
      setHovered(index, value) {
        this.isHovered = value ? index : null;
      },
      // 菜单显示位置
      showMenu(index) {
        this.selectItem(index);
        this.showRightMenu = true;
        this.rightMenuPosition = { x: event.clientX, y: event.clientY };
        document.addEventListener('click', this.hideMenu);
      },
      // 隐藏菜单
      hideMenu() {
        this.showRightMenu = false;
        document.removeEventListener('click', this.hideMenu);
      },
      // 复制功能
      copyItem() {
        console.log('触发复制！');
        const selectedItem = this.items[this.selectedIndex];
        this.copiedItem = { ...selectedItem, label: selectedItem.label + '_copy_' + Math.ceil(Math.random()*1e12) };
      },
      // 粘贴功能
      pasteItem() {
        console.log('触发粘贴！');
        this.copiedItem && this.items.push({ ...this.copiedItem });
      },
      // 删除功能
      deleteItem() {
        console.log('触发删除！');
        this.items.splice(this.selectedIndex, 1);
      },
      // 剪切功能
      cutItem() {
        console.log('触发剪切！');
        const selectedItem = this.items[this.selectedIndex];
        this.copiedItem = { ...selectedItem, label: selectedItem.label };
        this.items.splice(this.selectedIndex, 1);
      },
      // 上下移
      moveItem(offset) {
        console.log('触发移动！');
        const newIndex = this.selectedIndex + offset;
        if (newIndex >= 0 && newIndex < this.items.length) {
          const [removedItem] = this.items.splice(this.selectedIndex, 1);
          this.items.splice(newIndex, 0, removedItem);
        }
      },
      // 置顶置底
      moveToTopOrBottom(position) {
        console.log(`触发置${position}！`);
        const removedItem = this.items.splice(this.selectedIndex, 1)[0];
        if (position === 'top') this.items.unshift(removedItem);
        else if (position === 'bottom') this.items.push(removedItem);
      },
      // 键盘控制
      handleKeyDown(event) {
        const { ctrlKey, key } = event;
        if (ctrlKey) {
          switch (key) {
            case 'c':
              this.copyItem();
              break;
            case 'v':
              this.pasteItem();
              break;
            case 'x':
              this.cutItem();
              break;
          }
        } else {
          switch (key) {
            case 'Backspace':
              this.deleteItem();
              break;
            case 'ArrowUp':
              this.selectedIndex > 0 && this.selectedIndex--;
              break;
            case 'ArrowDown':
              this.selectedIndex < this.items.length - 1 && this.selectedIndex++;
              break;
          }
        }
        event.preventDefault();
      }
    }
  };
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: relative;
  width: 700px;
  min-height: 300px;
  padding: 15px;
  margin: 0 auto;
  background-color: rgba(102, 255, 102, 0.2);

  .context-menu-container-item {
    cursor: pointer;
    padding: 20px;
    margin: 20px;
    background-color: #fff;
  }
  .context-menu-container-item-hover {
    outline: #4caf50 dashed 2px;
  }
  .context-menu-container-item-selected {
    outline: #4caf50 solid 2px;
  }
  h4 {
    text-align: center;
  }
  span {
    margin-right: 15px;
  }
  span:last-child {
    margin-right: 0;
  }
}

</style>