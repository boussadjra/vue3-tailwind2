<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M21,29H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H21V5H5V27H21Z"/><path d="M15 9H17V23H15zM27 9H29V23H27zM21 9H23V23H21z"/></svg>
</template>
<script> 
export default
{ name:"IconScan", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>