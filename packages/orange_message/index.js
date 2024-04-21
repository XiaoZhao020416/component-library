import Vue from 'vue';
import MessageComponent from './src/orange_message.vue';

let MessageConstructor = Vue.extend(MessageComponent);

let instance; // 当前组件
let instances = []; // 将所有的message组件收集，用于位置的判断和销毁等

const Message = options => {
    // 如果只传入消息
    if (typeof options === 'string') {
        options = {
            message: options,
            onClose(message){
                console.log('关闭时的回调函数, 参数为被关闭的 message 实例', message);
            }
        };
    }
    // 设置options默认值
    options = {
        message: options.message,
        type: options.type || "info",
        showClose: options.showClose || false,
        duration: options.duration || 3000
    }
    // 组件实例，此时options与组件的data关联
    instance = new MessageConstructor({
        data: options
    });
    instance.$mount(); // 因为不存在el选项，实例不会立即进入编译阶段，需要显示调用$mount 手动开启编译
    document.body.insertBefore(instance.$el, document.body.firstChild); // 将Message 组件插入到body中

    // 设置组件距离顶部的距离，每个message组件会有16px的间距
    let topOffset = options.offset || 100;
    instances.forEach(item => {
        topOffset += item.$el.offsetHeight + 10;
    });
    instance.topOffset = topOffset;
    instance.visible = true; // 控制展示
    instance.type = options.type
    instance.showClose = options.showClose
    instances.push(instance);
    return instance;
};

Vue.prototype.$message = Message;

// 组件安装方法
Message.install = function (Vue) {
    Vue.component(Message.name, Message);
};

export default Message;