<template>
  <div>
      <div class="row" v-for="i in 10" :key="i">
          <div v-for="j in 10" :key="j">1</div>
      </div>
  </div>
</template>

<script setup></script>

<style scoped>
    .row {
        display: flex;
    }
</style>
