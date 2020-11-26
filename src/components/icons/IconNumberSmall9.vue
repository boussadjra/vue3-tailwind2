<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M17,21H14V19h3V17H15a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v6A2,2,0,0,1,17,21Zm-2-8v2h2V13Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumberSmall9", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>