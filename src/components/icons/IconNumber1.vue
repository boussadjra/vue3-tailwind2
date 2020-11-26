<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16,10V22h0V10m1-1H12v2h3V21H12v2h8V21H17V9Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber1", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>