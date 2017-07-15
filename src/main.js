// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Layout from './components/layout.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import IndexPage from './pages/index.vue';
import DetailPage from './pages/detail.vue';
import DetailAnaPage from './pages/detail/analysis.vue';
import DetailCouPage from './pages/detail/count.vue';
import DetailForPage from './pages/detail/forecast.vue';
import DetailPubPage from './pages/detail/publish.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
    mode: 'history',
    routes: [
      {
          path: '/',
          component: IndexPage
      },
      {
        path: '/detail',
        component: DetailPage,
        children: [
          {
            path: 'analysis',
            component: DetailAnaPage
          },
          {
            path: 'count',
            component: DetailCouPage
          },
          {
            path: 'forecast',
            component: DetailForPage
          },
          {
            path: 'publish',
            component: DetailPubPage
          }
        ]
      }
    ]
});


new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
});
