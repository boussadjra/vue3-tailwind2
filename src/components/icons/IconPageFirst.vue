<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M14 16L24 6 25.4 7.4 16.8 16 25.4 24.6 24 26zM8 4H10V28H8z"/></svg>
</template>
<script> 
export default
{ name:"IconPageFirst", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>