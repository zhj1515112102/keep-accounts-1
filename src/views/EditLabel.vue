<template>
  <Layout>增加标签</Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagList_Model from '@/models/tagList_Model';

@Component
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