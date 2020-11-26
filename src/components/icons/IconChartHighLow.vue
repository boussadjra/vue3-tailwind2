<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M15 8L12 8 12 6 10 6 10 20 7 20 7 22 10 22 10 24 12 24 12 10 15 10 15 8zM27 10L24 10 24 6 22 6 22 18 19 18 19 20 22 20 22 24 24 24 24 12 27 12 27 10z"/><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"/></svg>
</template>
<script> 
export default
{ name:"IconChartHighLow", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>