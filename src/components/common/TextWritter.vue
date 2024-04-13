<template>
  <div ref="finalNode" :class="[terminalCursorClass]">
    <span v-if="!sizeResolved" ref="contentNode">
      <slot></slot>
    </span>
    {{ currentText }} 
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue' 

const emit = defineEmits(['writeEnded'])

const props = defineProps({
  showBlinkCursor: {
    type: Boolean,
    default: false 
  },
  speed: {
    type: Number,
    default: 50
  },
  wrongCharProbability: {
    type: Number,
    default: 0.0
  }
})

const terminalCursorClass = computed(() =>{ 
  if (writeEnded.value) {
    return props.showBlinkCursor ? 'blinkterminalcursor' : ''
  } else {
    return 'terminalcursor'
  }

})
const writeEnded = ref(false)

const sizeResolved = ref(false)

const textToWrite = ref('') 
const currentText = ref('')

const contentNode = ref(null)
const finalNode = ref(null)

async function write() {
  const i = currentText.value.length
  if(i === textToWrite.value.length){
    writeEnded.value = true 
    emit('writeEnded') 
    return;
  }

  if(Math.random() < props.wrongCharProbability){
    /* add random char */
    currentText.value += String.fromCharCode(Math.floor(Math.random() * 255));
    await new Promise(resolve => setTimeout(resolve,props.speed*5))
    /* remove the last character */
    currentText.value = currentText.value.slice(0,-1)
  }

  currentText.value += textToWrite.value[i];
  setTimeout(write,props.speed)
}


onMounted(() => {
  textToWrite.value = contentNode.value.textContent 
  finalNode.value.style.minHeight=`${contentNode.value.offsetHeight}px`;
  finalNode.value.style.minWidth=`${contentNode.value.offsetWidth}px`
  sizeResolved.value = true
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        write()
      }
    })
  }, {
    threshold: 0.9
  })

  observer.observe(finalNode.value)
})
</script>
