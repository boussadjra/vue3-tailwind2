<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20 24L10 16 20 8z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretLeft", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>