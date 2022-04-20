<template>
  <Layout>
    <div>
      <Icon icon-name="left"/>
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入标签名"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagList_Model from '@/models/tagList_Model';
import Notes from '@/components/Money/Notes.vue';
@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagList_Model.fetch();
    const tags = tagList_Model.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>