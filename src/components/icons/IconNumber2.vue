<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20,23H12V17a2,2,0,0,1,2-2h4V11H12V9h6a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2H14v4h6Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber2", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>