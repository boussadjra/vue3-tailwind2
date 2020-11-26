<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 4L24 4 24 6 27.75 6 24 10 24 12 30 12 30 10 26.38 10 30 6 30 4zM20 17.62L22.08 14l-1.73-1-2.18 3.76A12 12 0 002 28H4a10 10 0 0113.16-9.48L14 24a2 2 0 102 2 2 2 0 00-.27-1L19 19.35A10 10 0 0124 28h2A12 12 0 0020 17.62z"/></svg>
</template>
<script> 
export default
{ name:"IconOperationGauge", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>