<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4,28V25H26V17H4V13H18V5H4V2H2V28a2,2,0,0,0,2,2H30V28Zm20-5H14V19H24ZM16,11H10V7h6Z"/></svg>
</template>
<script> 
export default
{ name:"IconChartBarStacked", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>