<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22 6L22 8 9.41 8 26 24.59 24.59 26 8 9.41 8 22 6 22 6 6 22 6z"/></svg>
</template>
<script> 
export default
{ name:"IconArrowUpLeft", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>