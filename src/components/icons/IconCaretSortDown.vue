<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 24L16 32 8 24z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretSortDown", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>