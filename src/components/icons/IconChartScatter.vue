<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"/><circle cx="10" cy="22" r="2"/><circle cx="14" cy="15" r="2"/><circle cx="22" cy="15" r="2"/><circle cx="26" cy="6" r="2"/><circle cx="14" cy="8" r="2"/></svg>
</template>
<script> 
export default
{ name:"IconChartScatter", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>