<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path fill-rule="evenodd" d="M25,23l5,2V23l-5-2.5V18a1,1,0,0,0-2,0v2.5L18,23v2l5-2v3.5L21,28v1l3-1,3,1V28l-2-1.5Z"/><path fill-rule="evenodd" d="M26,4H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H16V26H6V6h4V8h2V6h8V8h2V6h4v7h2V6A2,2,0,0,0,26,4Z"/></svg>
</template>
<script> 
export default
{ name:"IconFlightSchedule", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>