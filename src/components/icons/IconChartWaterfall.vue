<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28,28V18H26V28H22V4H20V28H10V14H8V28H4V2H2V28a2.0023,2.0023,0,0,0,2,2H30V28Z"/><path d="M14 4H16V18H14z"/></svg>
</template>
<script> 
export default
{ name:"IconChartWaterfall", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>