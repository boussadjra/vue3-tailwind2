<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 23H12V25H4zM24.5232 14H4v2H24.5a3.5 3.5 0 010 7H18.8281l2.586-2.5859L20 19l-5 5 5 5 1.4141-1.4141L18.8281 25H24.533a5.5 5.5 0 00-.01-11zM4 5H28V7H4z"/></svg>
</template>
<script> 
export default
{ name:"IconTextWrap", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>