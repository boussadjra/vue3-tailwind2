<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20 9L12 9 12 11 18 11 12 21 12 23 20 23 20 21 14 21 20 11 20 9z"/></svg>
</template>
<script> 
export default
{ name:"IconZ", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>