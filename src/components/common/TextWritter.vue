<template>
  <div ref="finalNode" :class="[terminalCursorClass]">
    <span v-if="!sizeResolved" ref="contentNode">
      {{ text }}
    </span>
    {{ currentText }} 
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue' 

const emit = defineEmits(['writeEnded'])

const props = defineProps({
  text: {
    type: String,
    default: 'TEXTO DE PRUEBAS'
  },
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
  },
  restart: {
    type: Boolean,
    default: true 
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

const currentText = ref('')

const contentNode = ref(null)
const finalNode = ref(null)

async function write() {
  const i = currentText.value.length
  if(i === props.text.length){
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

  currentText.value += props.text[i];
  setTimeout(write,props.speed)
}


onMounted(() => {
  finalNode.value.style.minHeight=`${contentNode.value.offsetHeight}px`;
  finalNode.value.style.minWidth=`${contentNode.value.offsetWidth}px`
  sizeResolved.value = true
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        write()
      } else if(props.restart) {
        currentText.value = '' 
      }
    })
  }, {
    threshold: 0.9
  })

  observer.observe(finalNode.value)
})
</script>
