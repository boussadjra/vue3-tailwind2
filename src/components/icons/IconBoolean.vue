<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23,23a7,7,0,1,1,7-7A7.0078,7.0078,0,0,1,23,23Zm0-12a5,5,0,1,0,5,5A5.0055,5.0055,0,0,0,23,11Z"/><circle cx="9" cy="16" r="7"/></svg>
</template>
<script> 
export default
{ name:"IconBoolean", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>