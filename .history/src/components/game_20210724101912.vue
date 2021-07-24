<template>
  <div>
    <div class="row" v-for="i in gameRow" :key="i">
      <div v-for="j in gameCol" :key="j">
        <Box :type="map[i][j]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";
import {gameRow, gameCol, map} from '../game'

</script>

<style scoped>
.row {
  display: flex;
}
</style>
