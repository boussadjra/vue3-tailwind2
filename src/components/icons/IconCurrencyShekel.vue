<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M9,27H7V5h8a5.0057,5.0057,0,0,1,5,5V22H18V10a3.0033,3.0033,0,0,0-3-3H9Z"/><path d="M20,27H12V10h2V25h6a3.0033,3.0033,0,0,0,3-3V5h2V22A5.0057,5.0057,0,0,1,20,27Z"/></svg>
</template>
<script> 
export default
{ name:"IconCurrencyShekel", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>