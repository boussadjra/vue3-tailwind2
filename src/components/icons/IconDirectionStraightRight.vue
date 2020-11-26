<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28 16L21 9 19.586 10.414 24.172 15 4 15 4 17 24.172 17 19.586 21.586 21 23 28 16z"/></svg>
</template>
<script> 
export default
{ name:"IconDirectionStraightRight", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>