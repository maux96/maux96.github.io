<template>
  <div id="start"
    class="relative flex flex-col place-content-between w-screen min-h-screen overflow-hidden colorfullbackground"
    :style="{'--parallelax-value': pureParallelaxValue, animation: '-global-background-move 12s infinite ease', 'background-size': '400% 400%'}">
    <div> <!-- dummy node for flex place-content-between --></div>
      <div id="bannercontent" class="z-0 flex flex-wrap md:flex-nowrap gap-5 place-content-start md:place-content-center place-items-center px-5">
      <img class="rounded-3xl md:w-60 md:h-60 w-44 h-44" src="https://avatars.githubusercontent.com/u/39928836?v=4" alt="Mauricio Mahmud">
      <div class="text-white md:basis-1/2 ">
        <div class="text-4xl font-bold">
          <TextWritter show-blink-cursor>{{ '>' }} Hi, I'm Mauricio Mahmud</TextWritter>
        </div>
        <h2 class="text-2xl font-light mb-8"> <TextWritter>...computer scientist.</TextWritter></h2>
        <p class="text-md  md:text-xl">
          <TextWritter :speed="10">I live in Málaga, Spain. In my free time I learn new stuff that calls my attention or program something interesting to me.</TextWritter>
        </p>
        <div>
          <div class="flex flex-row justify-end mt-8">
            <!-- <MyBrands /> -->
          </div>
        </div>
      </div>
    </div>
    <div 
      class="relative flex z-50 place-content-center place-items-center bottom-0 bg-transparent w-full h-20 cursor-pointer"
      @click="()=>$router.push({hash: '#content'})"
    >
      <GoogleIcon class="text-white select-none" :size="72" name="keyboard_arrow_down" />
    </div>
  </div>
</template>

<script setup>
import GoogleIcon from '@/components/common/GoogleIcon.vue'
import TextWritter from '@/components/common/TextWritter.vue'
import { ref } from 'vue';

const pureParallelaxValue = ref(0)

</script>


<style scoped>
  #bannercontent{
    --valid-parallelax-value: max(0 , calc( var(--parallelax-value) - 0.1 ) );

    transition: 0.2s all  ;
    transform: scale( calc( 1 - var(--valid-parallelax-value) / 5 )) translateY( calc( 1200px * var(--valid-parallelax-value) ) ) ;
    opacity: calc( 1 - 2 * var(--valid-parallelax-value));
    filter: blur( calc( 10px * var(--valid-parallelax-value) ));
  }
</style>
