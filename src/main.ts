import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagList_Model from '@/models/tagList_Model';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagList_Model.fetch();
window.findTag = (id:string)=>{
  return  window.tagList.filter(t => t.id === id)[0];
}
window.createTag = (name: string) => {
  const message = tagList_Model.create(name);
  if (message === 'duplicated') {
    window.alert('标签重复');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};
window.removeTag = (id: string) => {
  return tagList_Model.remove(id);
};
window.updateTag = (id:string,name:string)=>{
  return tagList_Model.update(id, name);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
