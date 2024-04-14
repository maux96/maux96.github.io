<script setup>
import GoogleIcon from '@/components/common/GoogleIcon.vue';
import TextWritter from '@/components/common/TextWritter.vue';

import { experiences } from '@/info.js'
</script>

<template>
  <div>
    <div v-for="exp, index in experiences" :key="index" class="">
      <div class="flex rounded-md gap-4">
        <div class="flex flex-col place-items-center">
          <div class="flex place-content-center place-items-center w-9 h-9 border-2 border-solid rounded-md ">
            <GoogleIcon :name="exp.icon" />
          </div>
          <div class="border-dashed border-l-2 flex-grow "></div>
        </div>
        <div class="pb-6">
          <TextWritter class="font-bold text-blue-700" :text="exp.title" />
          <p class="text-gray-600 text-sm">{{ exp.company }}</p>
          <p class="text-sm text-gray-500">{{ exp.description }}</p>
        </div>
      </div>  
    </div>
    <div>
      <div class="flex place-content-center place-items-start  w-9 h-9">
        <div class="w-3 h-3 border-2 border-solid rounded-full " />
      </div>
    </div>
  </div>
</template>