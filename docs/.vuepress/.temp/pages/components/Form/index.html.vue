<template><div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>出参</th>
</tr>
</thead>
<tbody>
<tr>
<td>onFormEvent</td>
<td>Form 表单事件</td>
<td>e: {form, btnInfo}</td>
</tr>
<tr>
<td>onResetSearch</td>
<td>重置搜索</td>
<td>Formb 表单默认值</td>
</tr>
<tr>
<td>onRadioChange</td>
<td>单选框</td>
<td>e</td>
</tr>
<tr>
<td>inputBtnSearch</td>
<td>input 右边插槽按钮事件</td>
<td>val</td>
</tr>
<tr>
<td>resetModelForm</td>
<td>使用 ref 来调用子组件的 resetModelForm 方法<code v-pre>FormRef.value.resetModelForm()</code>，以达到清空数据的效果</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>默认值</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>formColumns</td>
<td>formColumns</td>
<td></td>
<td></td>
</tr>
<tr>
<td>inline</td>
<td>行内表单模式</td>
<td>true</td>
<td>boolean</td>
</tr>
<tr>
<td>labelWidth</td>
<td>标签的长度，例如 '50'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto</td>
<td></td>
<td>number</td>
</tr>
<tr>
<td>labelPosition</td>
<td>表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性</td>
<td>right</td>
<td>string</td>
</tr>
<tr>
<td>shortcuts</td>
<td>设置快捷选项，需要传入数组对象</td>
<td>不传默认展示 last week, last month, last 3 month</td>
<td>object</td>
</tr>
</tbody>
</table>
</div></template>


