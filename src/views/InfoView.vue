<script setup>
import TextWritter from '@/components/common/TextWritter.vue';

import Skills from '@/views/InfoView/Skills.vue';
import Experience from '@/views/InfoView/Experience.vue';

import * as INFO from '@/info.js';
</script>

<template>
  <div id="info" class="relative p-5 flex lg:flex-row flex-col w-screen  overflow-hidden">

    <div class="p-2 basis-1/3">
      <TextWritter class="beautytext font-bold text-3xl mb-4">Experience</TextWritter>
      <Experience />   
    </div>

    <div class="p-2 basis-1/3">
      <TextWritter class="beautytext font-bold text-3xl mb-4">Skills</TextWritter>
      <Skills/>
    </div>
 
    <div class="p-2 basis-1/3">
      <TextWritter class="beautytext font-bold text-3xl mb-4">Hobby Programming</TextWritter>
      <!-- algunas boberias -->
      <p v-for="project, index in INFO.hobbyProjects"><a :href="project.link" class="beautytext font-bold text-blue-700 hover:text-blue-500"> {{project.name}}</a>: {{project.description}}</p>  
      

      <TextWritter class="beautytext font-bold text-3xl mt-4 mb-4">Current Interests</TextWritter>

      <p>ComputerScience, AI, MachineLearning, Maths, Blockchain and Crypto, GameDev, Linux, French and much more.</p>

    </div>


    <!-- background icons -->
    <div class="absolute top-0 left-0  rotate-45 pointer-events-none">
      <CodeBranchSolid class=" text-gray-400 opacity-5" size="300"/>
    </div>
    <div class="absolute bottom-0 right-0 pointer-events-none">
      <CodeSolid class=" text-gray-400 opacity-5" size="300"/>
    </div>
    <!--  -->

  </div>
</template>
