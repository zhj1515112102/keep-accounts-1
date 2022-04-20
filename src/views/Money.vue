<template>

  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="备注信息"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>

</template>

<script lang="ts">
/*eslint-disable*/
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import recordList_Model from '@/models/recordList_Model';
import tagList_Model from '@/models/tagList_Model';

const recordList = recordList_Model.fetch();
const tagList = tagList_Model.fetch();

@Component({
  components: {FormItem, Tags, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
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
    const record2: RecordItem = recordList_Model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordList_Model.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>
