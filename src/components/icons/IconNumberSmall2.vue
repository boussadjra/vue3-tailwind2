<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M19,21H13V17a2,2,0,0,1,2-2h2V13H13V11h4a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H15v2h4Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumberSmall2", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>