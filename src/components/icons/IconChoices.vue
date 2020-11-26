<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M21 4L21 6 24.586 6 16 14.586 7.414 6 11 6 11 4 4 4 4 11 6 11 6 7.414 15 16.414 15 28 17 28 17 16.414 26 7.414 26 11 28 11 28 4 21 4z"/></svg>
</template>
<script> 
export default
{ name:"IconChoices", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>