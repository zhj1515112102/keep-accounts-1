import recordList_Model from '@/models/recordList_Model';
import tagList_Model from '@/models/tagList_Model';

const store = {
  //record store
  recordList: recordList_Model.fetch(),
  createRecord: (record: RecordItem) => recordList_Model.create(record),

  //tag store
  tagList: tagList_Model.fetch(),
  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string) => {
    const message = tagList_Model.create(name);
    if (message === 'duplicated') {
      window.alert('标签重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeTag: (id: string) => {
    return tagList_Model.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagList_Model.update(id, name);
  }
};

export default store