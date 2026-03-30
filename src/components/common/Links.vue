<script setup>
import * as INFO from '@/info.js'
import GoogleIcon from '@/components/common/GoogleIcon.vue'
</script>

<template>
  <div class="flex gap-3 place-items-center">
    <a
      v-for="link in INFO.LINKS"
      :key="link.url"
      :href="link.url"
      target="_blank"
      rel="noreferrer"
      class="inline-flex font-semibold select-none"
    >
      <img class="size-10" :src="link.icon" :alt="link.name" />
    </a>
    <a :href="INFO.CV_URL" target="_blank" class="flex place-items-center h-10 !text-white border-solid border-white border-2 px-2 rounded-md my-2 cursor-pointer select-none">
          <GoogleIcon name="download" :size="32" />
          <div class="!font-extrabold">Download CV</div> 
    </a>
  </div>
</template>
