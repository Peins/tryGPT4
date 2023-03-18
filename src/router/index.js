import Vue from 'vue';
import Router from 'vue-router';
import Chat from '../components/Chat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat,
    },
  ],
});
