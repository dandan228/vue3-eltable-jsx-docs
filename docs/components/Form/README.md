## 事件
| 事件名 | 说明 | 出参 |
|--------|------|------|
| onFormEvent | Form 表单事件 | e: {form, btnInfo} |
| onResetSearch | 重置搜索 | Formb 表单默认值 |
| onRadioChange | 单选框 | e |
| inputBtnSearch | input 右边插槽按钮事件 | val |
| resetModelForm | 使用 ref 来调用子组件的 resetModelForm 方法`FormRef.value.resetModelForm()`，以达到清空数据的效果 | |

## 属性
| 属性名 | 说明 | 默认值 | 类型 |
|--------|------|------|------|
| formColumns | formColumns | |
| inline | 行内表单模式 | true | boolean |
| labelWidth | 标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto | | number |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | right | string |
| shortcuts | 设置快捷选项，需要传入数组对象 | 不传默认展示 last week, last month, last 3 month | object |