<template>
  <div ref="container" @mousemove="moveTitle" class="relative">

    <div id="header"
      class="relative flex flex-col place-content-between gap-3 w-screen min-h-screen overflow-hidden colorfullbackground"
      style="animation: -global-background-move 12s infinite ease; background-size: 400% 400%; perspective: 300px;"
    >
      <div class="flex gap-3 place-content-end place-items-center mx-5"> 
        <Links /> 
      </div>

      <div ref="titleContainer" class="flex flex-wrap md:flex-nowrap gap-5 place-content-start md:place-content-center place-items-start px-5">
        <img class="rounded-3xl md:w-60 md:h-60 w-44 h-44" :src="PROFILE_PICTURE_URL" alt="Mauricio Mahmud">
        <div class="text-white md:basis-1/2 ">
          <div class="text-4xl font-bold">
            <TextWritter show-blink-cursor text="> Hi, I'm Mauricio Mahmud" />
          </div>
          <h2 class="text-lg md:text-2xl font-light mb-6">
            <TextWritter text="software developer | computer scientist" />
          </h2>
          <p class="text-md md:text-xl">
            <TextWritter
              :speed="10"
              :restart="false"
              text="I'm currently based in Málaga, Spain. I have cultivated a career in computer science, where I've had the opportunity to develop a robust skill set and work on a multitude of projects that span various aspects of technology, including software development, data analysis, and system architecture. In my free time I learn new stuff that calls my attention or program something interesting to me."
            />
          </p>
        </div>
      </div>
      <div 
        class="relative flex z-50 place-content-center place-items-center bottom-0 bg-transparent w-full h-20 cursor-pointer transition-transform duration-300"
        :class="{ 'rotate-180': !shouldNavigateDown }"
        @click="buttonActionToGoToPosition"
      >
        <GoogleIcon class="text-white select-none" :size="72" name="keyboard_arrow_down" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GoogleIcon from '@/components/common/GoogleIcon.vue'
import TextWritter from '@/components/common/TextWritter.vue'
import Links from '@/components/common/Links.vue'
import { onMounted, ref } from 'vue';
import { PROFILE_PICTURE_URL } from '@/info';
import { useRouter, useRoute } from 'vue-router'


const router = useRouter();
const route = useRoute();

const MAX_X_ANGLE = 5;
const MAX_Y_ANGLE = 5;

const titleContainer = ref(null)
const container = ref(null)

let animationFrame = null 

let currentScrollPosition = 0
let lastXAngle = 0
let lastYAngle = 0
let shouldNavigateDown = ref(true)

function updateScrollState() {
  const scrollHeight = document.documentElement.scrollHeight
  currentScrollPosition = document.documentElement.scrollTop / scrollHeight
  shouldNavigateDown.value = document.documentElement.scrollTop < window.innerHeight / 2
}

onMounted(() => {
  updateScrollState()
  addEventListener('scroll', () => {
    updateScrollState()
    refreshTransform()
  })
})

function buttonActionToGoToPosition() {
  if (shouldNavigateDown.value) {
    router.push({hash: '#content'})
  } else {
    router.push({hash: '#header'})
  }
}

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
