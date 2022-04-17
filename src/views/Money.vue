<template>

  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>

</template>

<script lang="ts">
/*eslint-disable*/
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

const version = window.localStorage.getItem('version') || '0';
const recordList: Recorde[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

if (version === '0.0.1') {
  //数据库升级，数据迁移
  recordList.forEach(record => {
    record.createAt = new Date(2022, 0, 1);
  });
  //保存数据
  window.localStorage.setItem('recordList', JSON.stringify(recordList));
}
window.localStorage.setItem('version', '0.0.2');

type Recorde = {
  tags: string[]
  notes: string
  type: string
  amount: number   //数据类型
  createAt?: Date   //类
}

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Recorde[] = recordList;
  record: Recorde = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: Recorde = JSON.parse(JSON.stringify(this.record));
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
