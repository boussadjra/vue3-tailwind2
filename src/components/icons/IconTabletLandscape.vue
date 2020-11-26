<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 13H26V19H24z"/><path d="M30,7V25a2.0023,2.0023,0,0,1-2,2H4a2.002,2.002,0,0,1-2-2V7A2.0023,2.0023,0,0,1,4,5H28A2.0027,2.0027,0,0,1,30,7ZM4,25H28V7H4Z"/></svg>
</template>
<script> 
export default
{ name:"IconTabletLandscape", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>