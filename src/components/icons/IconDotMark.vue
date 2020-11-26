<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <circle cx="16" cy="16" r="8"/></svg>
</template>
<script> 
export default
{ name:"IconDotMark", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>