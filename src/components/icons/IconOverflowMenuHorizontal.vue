<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/></svg>
</template>
<script> 
export default
{ name:"IconOverflowMenuHorizontal", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>