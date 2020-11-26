<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18,9H12v2h6v4H14v2h4v4H12v2h6a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber3", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>