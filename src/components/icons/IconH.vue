<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18 9L18 15 14 15 14 9 12 9 12 23 14 23 14 17 18 17 18 23 20 23 20 9 18 9z"/></svg>
</template>
<script> 
export default
{ name:"IconH", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>