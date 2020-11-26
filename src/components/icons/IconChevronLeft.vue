<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronLeft", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>