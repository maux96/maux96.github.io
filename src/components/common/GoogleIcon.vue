<template>
  <span class="material-symbols-rounded" :style="{
    'font-variation-settings':`
      'FILL' ${props.fillIcon ? 1 : 0},
      'wght' 400,
      'GRAD' 0,
      'opsz' 24 
    `,
    fontSize: `${size}px`
  }">
    {{ name }}  
  </span> 
</template>

<script setup>
  const props= defineProps({
    name: {default: 'disabled_by_default'},
    size: {default: '24px'},
    fillIcon: {default: false} 
  })
</script>


<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0..1,0");
</style>