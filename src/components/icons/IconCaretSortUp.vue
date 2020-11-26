<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 8L16 0 24 8z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretSortUp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>