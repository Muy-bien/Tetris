<template>
  <div>
    <div class="row" v-for="i in 10" :key="i">
      <div v-for="j in 10" :key="j">
        <Box></Box>
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";

const gameRow = 10
const gameCol = 15
</script>

<style scoped>
.row {
  display: flex;
}
</style>
