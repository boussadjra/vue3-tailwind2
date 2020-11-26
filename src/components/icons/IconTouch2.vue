<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M29,15H27A11,11,0,0,0,5,15H3a13,13,0,0,1,26,0Z"/><path d="M25,28H23V15A7,7,0,1,0,9,15V28H7V15a9,9,0,0,1,18,0Z"/><path d="M21,20H11V15a5,5,0,0,1,10,0Zm-8-2h6V15a3,3,0,0,0-6,0Z"/></svg>
</template>
<script> 
export default
{ name:"IconTouch2", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>