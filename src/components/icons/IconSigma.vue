<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 5L7 5 7 7.414 15.586 16 7 24.586 7 27 24 27 24 25 9.414 25 18.414 16 9.414 7 24 7 24 5z"/></svg>
</template>
<script> 
export default
{ name:"IconSigma", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>