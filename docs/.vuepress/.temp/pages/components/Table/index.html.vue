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
<td>onTableBtnEvent</td>
<td>操作栏按钮事件</td>
<td>e: {btn, colIdx, $index, row}</td>
</tr>
<tr>
<td>onTableInput</td>
<td>input 事件</td>
<td>val， row</td>
</tr>
<tr>
<td>onSwitchChange</td>
<td>switch 事件</td>
<td>bln, row</td>
</tr>
<tr>
<td>onSelectionChange</td>
<td>table 多选事件</td>
<td>row</td>
</tr>
<tr>
<td>onSortChange</td>
<td>table 表头排序事件</td>
<td>sort</td>
</tr>
<tr>
<td>rowItemEvent</td>
<td>table 里的 a 标签</td>
<td>row</td>
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
<td>tableData</td>
<td>table 源数据</td>
<td>[]</td>
<td>array</td>
</tr>
<tr>
<td>columns</td>
<td>columns</td>
<td>[]</td>
<td>array</td>
</tr>
<tr>
<td>tableMultiple</td>
<td>多选</td>
<td>false</td>
<td>boolean</td>
</tr>
<tr>
<td>btnByStateMapAt</td>
<td>columns 属性 key</td>
<td></td>
<td>string</td>
</tr>
<tr>
<td>btnByStateMap</td>
<td>根据状态 columns 属性 key，显示不同的按钮</td>
<td>{}</td>
<td>object</td>
</tr>
<tr>
<td>defaultSort</td>
<td>表头默认排序(是个对象)</td>
<td>{}</td>
<td>object</td>
</tr>
<tr>
<td>prependIcon</td>
<td>当 filterType='input'时，开启 input 前面 icon 插槽</td>
<td></td>
<td>icon</td>
</tr>
<tr>
<td>prependTxt</td>
<td>当 filterType='input'时，开启 input 前面 txt 插槽</td>
<td></td>
<td>string</td>
</tr>
<tr>
<td>appendIcon</td>
<td>当 filterType='input'时，开启 input 后面 icon 插槽</td>
<td></td>
<td>boolean</td>
</tr>
<tr>
<td>appendTxt</td>
<td>当 filterType='input'时，开启 input 后面 txt 插槽</td>
<td></td>
<td>string</td>
</tr>
</tbody>
</table>
</div></template>


