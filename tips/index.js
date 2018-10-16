import Vue from 'vue'
import Main from './index.vue'
// 初始化
let instance;
let instances = [];
let i = 1;
// 继承Vue实例
const MessageInstance = Vue.extend(Main)

const Message = (opts) => {
  if (typeof opts === 'string') {
    // 改变内容
    opts = {
      message: opts
    }
  }
  // 实例
  instance = new MessageInstance({
    data: opts
  })
  // 用户事件
  let userClose = opts.onClose;
  let id = `hd_id${i++}`;
  // 记录实例的历史
  instance.vm = instance.$mount();
  instances.push(instance.vm);
  // 用户点击关闭
  opts.onClose = () => {
    Message.close(id, userClose)
  }
  // 在实例中注入id
  instance.id = id;
  // 关闭的时候清除实例
  Message.close = (id, userClose) => {
    for (let i = 0; i < instances.length; i++) {
      if (id === instances[i].id) {
        if (typeof userClose === 'function') {
          userClose(instances[i])
        }
      }
      instances.splice(i, 1);
      break;
    }
  }
  // 页面添加
  document.body.appendChild(instance.vm.$el)
}
export default Message;
