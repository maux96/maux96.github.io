<template>
  <div ref="container" @mousemove="moveTitle" class="relative">
    <div id="header"
      class="relative flex flex-col place-content-between w-screen min-h-screen overflow-hidden colorfullbackground"
      style="animation: -global-background-move 12s infinite ease; background-size: 400% 400%; perspective: 300px;"
      :style="{'--parallelax-value': pureParallelaxValue}">
      <div> <!-- dummy node for flex place-content-between --></div>
      <div ref="titleContainer" class="flex flex-wrap md:flex-nowrap gap-5 place-content-start md:place-content-center place-items-start px-5">
        <img class="rounded-3xl md:w-60 md:h-60 w-44 h-44" src="https://avatars.githubusercontent.com/u/39928836?v=4" alt="Mauricio Mahmud">
        <div class="text-white md:basis-1/2 ">
          <div class="text-4xl font-bold">
            <TextWritter show-blink-cursor>{{ '>' }} Hi, I'm Mauricio Mahmud</TextWritter>
          </div>
          <h2 class="text-2xl font-light mb-6"> <TextWritter>...computer scientist.</TextWritter></h2>
          <p class="text-md  md:text-xl">
            <TextWritter :speed="10">I'm currently based in Málaga, Spain. I have cultivated a career in computer science, where I've had the opportunity to develop a robust skill set and work on a multitude of projects that span various aspects of technology, including software development, data analysis, and system architecture. In my free time I learn new stuff that calls my attention or program something interesting to me.</TextWritter>
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
  </div>
</template>

<script setup>
import GoogleIcon from '@/components/common/GoogleIcon.vue'
import TextWritter from '@/components/common/TextWritter.vue'
import { ref } from 'vue';

const titleContainer = ref(null)
const container = ref(null)

let animationFrame = null 
function moveTitle(event){

  animationFrame && window.cancelAnimationFrame(animationFrame);

  animationFrame = window.requestAnimationFrame(()=>{
    const X =-((event.x/container.value.offsetWidth) - 0.5).toFixed(2);
    const Y =((event.y/container.value.offsetHeight) - 0.5).toFixed(2);

    const MAX_X_ANGLE = 5;
    const MAX_Y_ANGLE = 5;

    titleContainer.value.style.transform = `rotateY(${X*MAX_X_ANGLE}deg) rotateX(${Y*MAX_Y_ANGLE}deg)`;
  })
}

</script>


<style scoped>
</style>
