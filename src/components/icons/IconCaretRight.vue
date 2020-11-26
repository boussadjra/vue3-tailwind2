<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12 8L22 16 12 24z"/></svg>
</template>
<script> 
export default
{ name:"IconCaretRight", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>