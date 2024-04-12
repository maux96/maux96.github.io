<script setup>
import { skills } from '@/info.js'
</script>

<template>
<div class="flex flex-col gap-2">
    <div>
        <p class="text-sm text-gray-600">Programming Languages.</p>
        <div class="flex flex-wrap">
            <span v-for="skill in skills.languages" class="px-1 border-2 border-blue-700 rounded-md mr-1 mt-1">{{skill}}</span>
        </div>
    </div>
    <div>
        <p class="text-sm text-gray-600">Frameworks.</p>
        <div class="flex flex-wrap">
            <span v-for="skill in skills.frameworks" class="px-1 border-2 border-blue-700 rounded-md mr-1 mt-1">{{skill}}</span>
        </div>
    </div>
    <div>
        <p class="text-sm text-gray-600">Others.</p>
        <div class="flex flex-wrap">
            <span v-for="skill in skills.others" class="px-1 border-2 border-blue-700 rounded-md mr-1 mt-1">{{skill}}</span>
        </div>
    </div>
</div>
</template>