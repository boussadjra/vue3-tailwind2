<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22,10V6H10v6H4V2H2V28a2.0025,2.0025,0,0,0,2,2H30V10ZM12,14V8h8v4h8V22H22V16H12v6H4V14ZM4,28V24H14V18h6v6h8v4Z"/></svg>
</template>
<script> 
export default
{ name:"IconChartAreaStepper", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>