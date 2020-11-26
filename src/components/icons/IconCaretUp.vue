<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 20L16 10 24 20z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretUp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>