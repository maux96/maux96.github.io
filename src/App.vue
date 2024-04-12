<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <div id="content" class="bg-gray-800 text-white w-screen">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
