<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M11 21L11 9 9 9 9 23 17 23 17 21 11 21zM23 23H21a2 2 0 01-2-2V9h2V21h2z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterLl", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>