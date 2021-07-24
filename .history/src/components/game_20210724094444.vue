<template>
  <div>
    <div class="row" v-for="i in gameRow" :key="i">
      <div v-for="j in gameCol" :key="j">
        <Box></Box>
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";

const gameRow = 15
const gameCol = 10
</script>

<style scoped>
.row {
  display: flex;
}
</style>
