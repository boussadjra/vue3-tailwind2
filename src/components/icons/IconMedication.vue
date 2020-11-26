<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24,2H8A2,2,0,0,0,6,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,24,2ZM10,14h3V24H10ZM22,28H10V26h5V12H10V10H22ZM8,8V4H24V8Z"/></svg>
</template>
<script> 
export default
{ name:"IconMedication", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>