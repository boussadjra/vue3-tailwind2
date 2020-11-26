<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 12L16 22 8 12z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretDown", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>