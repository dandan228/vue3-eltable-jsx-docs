<template>
  <MTable :columns="columns" :tableData="tableData" :border="false" />
</template>

<script setup>
const columns = [
  {
    prop: "date",
    label: "Date",
    sortable: true,
    width: "150",
  },
  {
    prop: "state",
    label: "状态123",
    width: "150",
  },
  {
    label: "操作",
    tableType: "btn",
    width: "250",
    btnArr: [
      { btnId: 0, label: "通过", color: "primary" },
      { btnId: 2, label: "禁用", color: "danger", disabled: true },
    ],
  },
];

const tableData = [
  {
    date: "2027-07-14",
    state: "0",
  },
];
</script>
