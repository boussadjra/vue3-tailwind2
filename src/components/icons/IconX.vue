<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20 9L18 9 16 15 14 9 12 9 14.75 16 12 23 14 23 16 17 18 23 20 23 17.25 16 20 9z"/></svg>
</template>
<script> 
export default
{ name:"IconX", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>