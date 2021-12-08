// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// 1.通过 vue init webpack my-project 搭建vue2 webpack项目
// 2.映入rem文件动态设置html的字体大小
import "./rem";
// 3.安装 postcss-pxtorem@5.1.1
// 4..postcssrc.js 配置 postcss-pxtorem
/*
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
          rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
          propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
          unitPrecision: 5, //保留rem小数点多少位
          selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
          replace: true, //是否直接替换
          mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
          minPixelValue: 12, //px小于12的不会被转换
    }
  }
}
*/

// 5.项目中按ui稿正常填写像素大小，解析后自动转为rem单位

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
