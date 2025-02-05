## 基础使用

![示例图片](../../../assets/Paginate.png)

```js
import { defineComponent } from "vue";
import { MTable } from "el-table-jsx";

export default defineComponent({
  setup(props, { emit }) {
    return () => (
      <MTable pageInfo={{ pageSize: 10, pageNum: 1, total: 10 }}></MTable>
    );
  },
});

```

## 事件
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onPageSizeEvent | 页容量事件 | pageSize |
| onPageEvent | 当前页事件 | pageNum |

## 属性

| 属性名   | 说明     | 默认值 | 类型   |
| -------- | -------- | ------ | ------ |
| pageInfo | 分页信息 |        | object |
