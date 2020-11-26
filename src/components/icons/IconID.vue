<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10 9H12V11H10zM18 23H14V9h4a4 4 0 014 4v6A4 4 0 0118 23zm-2-2h2a2 2 0 002-2V13a2 2 0 00-2-2H16zM10 13H12V23H10z"/></svg>
</template>
<script> 
export default
{ name:"IconID", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>