<template>
  <div class="box">
    <div class="box-main">{{type}}</div>
  </div>
</template>

<script setup>
    const props = defineProps(['type'])
</script>

<style scoped>
.box {
  width: 25px;
  height: 25px;
  margin: 1px;
  border: 2px solid #7f876a;
  padding: 1px;
  box-sizing: border-box;
}

.box-main {
    background-color: #7f876a;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
