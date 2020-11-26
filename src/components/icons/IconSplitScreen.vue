<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M15 4H17V28H15zM10 7V25H4V7h6m0-2H4A2 2 0 002 7V25a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2zM28 7V25H22V7h6m0-2H22a2 2 0 00-2 2V25a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z"/></svg>
</template>
<script> 
export default
{ name:"IconSplitScreen", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>