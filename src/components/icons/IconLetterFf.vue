<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 11L16 9 8 9 8 23 10 23 10 17 15 17 15 15 10 15 10 11 16 11zM24 11V9H21a2 2 0 00-2 2v2H17v2h2v8h2V15h3V13H21V11z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterFf", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>