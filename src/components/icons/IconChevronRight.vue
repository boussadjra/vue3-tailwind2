<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronRight", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>