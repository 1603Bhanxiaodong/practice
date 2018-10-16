/*
* hanxiaodong 2018-9-19
*/
import { getRem, getBreoWidth } from './rem'

(function (doc, win) {
  let resizeBase = 'rientationchange' in window ? 'orientationchange' : 'resize'
  if (!window.addEventListener) {
    return
  }
  let remCallB = () => {
    doc.documentElement.style.fontSize = `${getRem(getBreoWidth())}px`
  }
  // 改变屏幕尺寸计算
  win.addEventListener(resizeBase, remCallB)
  // dom加载完成计算
  win.addEventListener('DOMContentLoaded', remCallB)
})(document, window)
