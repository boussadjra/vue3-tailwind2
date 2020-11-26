<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18,23H12V21h6V17H12V9h8v2H14v4h4a2,2,0,0,1,2,2v4A2,2,0,0,1,18,23Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumber5", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>