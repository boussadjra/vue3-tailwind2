<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 10L22.586 11.414 26.172 15 5.828 15 9.414 11.414 8 10 2 16 8 22 9.414 20.586 5.828 17 26.172 17 22.586 20.586 24 22 30 16 24 10z"/></svg>
</template>
<script> 
export default
{ name:"IconPanHorizontal", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>