<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M29 17L23 17 23 11 27 11 27 9 23 9 23 7 29 7 29 13 25 13 25 15 29 15 29 17zM4 7L4 9 11 9 11 25 13 25 13 9 20 9 20 7 4 7z"/></svg>
</template>
<script> 
export default
{ name:"IconTextSuperscript", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>