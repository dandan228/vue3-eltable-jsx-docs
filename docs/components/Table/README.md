## 事件
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onTableBtnEvent | 操作栏按钮事件 | e: {btn, colIdx, $index, row} |
| onTableInput | input 事件 | val， row |
| onSwitchChange | switch 事件 | bln, row |
| onSelectionChange | table 多选事件 | row |
| onSortChange | table 表头排序事件 | sort |
| rowItemEvent | table 里的 a 标签 | row |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |

## 属性
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| tableData | table 源数据 | [] | array |
| columns | columns | [] | array |
| tableMultiple | 多选 | false | boolean |
| btnByStateMapAt | columns 属性 key | | string |
| btnByStateMap | 根据状态 columns 属性 key，显示不同的按钮 | {} | object |
| defaultSort | 表头默认排序(是个对象) | {} | object |
| prependIcon | 当 filterType='input'时，开启 input 前面 icon 插槽 | | icon |
| prependTxt | 当 filterType='input'时，开启 input 前面 txt 插槽 | | string |
| appendIcon | 当 filterType='input'时，开启 input 后面 icon 插槽 | | boolean |
| appendTxt | 当 filterType='input'时，开启 input 后面 txt 插槽 | | string |