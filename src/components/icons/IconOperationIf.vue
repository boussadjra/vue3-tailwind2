<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12 13H14V23H12zM12 9H14V11H12zM23 11V9H20a2 2 0 00-2 2v2H16v2h2v8h2V15h3V13H20V11z"/></svg>
</template>
<script> 
export default
{ name:"IconOperationIf", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>