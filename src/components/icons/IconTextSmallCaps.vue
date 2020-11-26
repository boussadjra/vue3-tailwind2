<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23 27L23 15 18 15 18 13 30 13 30 15 25 15 25 27 23 27z"/><path d="M11 27L11 8 2 8 2 6 22 6 22 8 13 8 13 27 11 27z"/></svg>
</template>
<script> 
export default
{ name:"IconTextSmallCaps", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>