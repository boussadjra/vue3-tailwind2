<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28,28V6H20V28H16V14H8V28H4V2H2V28a2,2,0,0,0,2,2H30V28ZM22,8h4V18H22ZM10,16h4v6H10Z"/></svg>
</template>
<script> 
export default
{ name:"IconChartStacked", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>