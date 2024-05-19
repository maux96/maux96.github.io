<template>
  <div ref="container" @mousemove="moveTitle" class="relative">

    <div id="header"
      class="relative flex flex-col place-content-between gap-3 w-screen min-h-screen overflow-hidden colorfullbackground"
      style="animation: -global-background-move 12s infinite ease; background-size: 400% 400%; perspective: 300px;"
      :style="{'--parallelax-value': pureParallelaxValue}"
    >
      <div class="flex gap-2 place-content-end"> 
        <a :href="cvUrl" target="_blank" class="flex place-items-center !text-white border-solid border-white border-2 px-2 rounded-md mr-5 my-2 cursor-pointer select-none">
          <GoogleIcon name="download" :size="32" />
          <div class="!font-extrabold">Download CV</div> 
        </a>
      </div>

      <div ref="titleContainer" class="flex flex-wrap md:flex-nowrap gap-5 place-content-start md:place-content-center place-items-start px-5">
        <img class="rounded-3xl md:w-60 md:h-60 w-44 h-44" src="https://avatars.githubusercontent.com/u/39928836?v=4" alt="Mauricio Mahmud">
        <div class="text-white md:basis-1/2 ">
          <div class="text-4xl font-bold">
            <TextWritter show-blink-cursor text="> Hi, I'm Mauricio Mahmud" />
          </div>
          <h2 class="text-2xl font-light mb-6"> <TextWritter  text="...computer scientist." /></h2>
          <p class="text-md  md:text-xl">
            <TextWritter :speed="10" :restart="false" text="I'm currently based in Málaga, Spain. I have cultivated a career in computer science, where I've had the opportunity to develop a robust skill set and work on a multitude of projects that span various aspects of technology, including software development, data analysis, and system architecture. In my free time I learn new stuff that calls my attention or program something interesting to me." />
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
import { onMounted, ref } from 'vue';


const cvUrl = 'https://drive.google.com/file/d/1S4es6okjbK9onXTjg9seji9N-_dCdl9G/view?usp=sharing'
const MAX_X_ANGLE = 5;
const MAX_Y_ANGLE = 5;

const titleContainer = ref(null)
const container = ref(null)

let animationFrame = null 

let currentScrollPosition = 0
let lastXAngle = 0
let lastYAngle = 0

onMounted(()=>{
  addEventListener('scroll',()=>{ 
    currentScrollPosition = document.documentElement.scrollTop / document.documentElement.scrollHeight; 
    refreshTransform()
  })
})

function moveTitle(event){
  lastXAngle =-((event.x/container.value.offsetWidth) - 0.5).toFixed(2);
  lastYAngle =((event.y/container.value.offsetHeight) - 0.5).toFixed(2);
  refreshTransform()
}

function refreshTransform() {
  animationFrame && window.cancelAnimationFrame(animationFrame);
  animationFrame = window.requestAnimationFrame(()=>{
    titleContainer.value.style.transform = `translateY(${currentScrollPosition*500}px) rotateY(${lastXAngle*MAX_X_ANGLE}deg) rotateX(${lastYAngle*MAX_Y_ANGLE}deg) `;
    titleContainer.value.style.opacity = 1 - currentScrollPosition * 2 
  })
}

</script>


<style scoped>
</style>
