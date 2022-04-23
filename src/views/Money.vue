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
    <Tags @update:value="onUpdateTags"/>
  </Layout>

</template>

<script lang="ts">
/*eslint-disable*/
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import store from '@/store/index2.ts';


@Component({
  components: {FormItem, Tags, Types, NumberPad},
  computed: {
    recordList() {
      return store.recordList;
    }
  }
})
export default class Money extends Vue {
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
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
