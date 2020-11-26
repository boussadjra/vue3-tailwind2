<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 16L22 24 20.586 22.586 27.172 16 20.586 9.414 22 8 30 16z"/><path d="M16,22a.9967.9967,0,0,1-.707-.293l-5-5a.9994.9994,0,0,1,0-1.414l5-5a.9994.9994,0,0,1,1.414,0l5,5a.9994.9994,0,0,1,0,1.414l-5,5A.9967.9967,0,0,1,16,22Zm-3.5859-6L16,19.5859,19.5859,16,16,12.4141Z"/><path d="M2 16L10 8 11.414 9.414 4.828 16 11.414 22.586 10 24 2 16z"/></svg>
</template>
<script> 
export default
{ name:"IconTypes", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>