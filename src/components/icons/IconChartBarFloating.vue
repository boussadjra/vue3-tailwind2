<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28 24H14V16H28zM16 22H26V18H16zM26 12H8V4H26zM10 10H24V6H10z"/><path d="M30,30H4a2.0023,2.0023,0,0,1-2-2V2H4V28H30Z"/></svg>
</template>
<script> 
export default
{ name:"IconChartBarFloating", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>