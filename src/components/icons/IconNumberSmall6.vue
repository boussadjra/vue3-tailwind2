<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M17,21H15a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3v2H15v2h2a2,2,0,0,1,2,2v2A2,2,0,0,1,17,21Zm-2-4v2h2V17Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumberSmall6", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>