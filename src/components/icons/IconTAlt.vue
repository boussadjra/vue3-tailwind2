<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 11L11 11 11 23 13 23 13 11 16 11 16 9 8 9 8 11zM24 9L22 9 22 7 20 7 20 9 18 9 18 11 20 11 20 17 21 18 22 17 22 11 24 11 24 9z"/></svg>
</template>
<script> 
export default
{ name:"IconTAlt", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>