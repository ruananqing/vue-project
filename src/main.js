// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout.vue';

// let router = new VRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/a',
//       component: componentA,
//     },
//     {
//       path: '/b',
//       component: componentB
//     },
//     {
//       path: '/c',
//       component: componentC
//     }
//   ]
// });


new Vue({
  el: '#app',
  template: '<Layout/>',
  components: { Layout }
});
