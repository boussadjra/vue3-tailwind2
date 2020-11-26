<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10 8L11.414 9.414 15 5.828 15 26.172 11.414 22.586 10 24 16 30 22 24 20.586 22.586 17 26.172 17 5.828 20.586 9.414 22 8 16 2 10 8z"/></svg>
</template>
<script> 
export default
{ name:"IconPanVertical", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>