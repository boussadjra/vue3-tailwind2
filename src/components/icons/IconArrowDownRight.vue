<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10 26L10 24 22.59 24 6 7.41 7.41 6 24 22.59 24 10 26 10 26 26 10 26z"/></svg>
</template>
<script> 
export default
{ name:"IconArrowDownRight", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>