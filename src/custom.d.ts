type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number   //数据类型
  createdAt?: string
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
  remove: (id: string) => boolean
  save: () => void
}

