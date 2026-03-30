<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <div id="content" class="bg-gray-800 text-white w-screen">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>

</style>
