<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20 9L18 9 16 16 14 9 12 9 15 18 15 23 17 23 17 18 20 9z"/></svg>
</template>
<script> 
export default
{ name:"IconY", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>