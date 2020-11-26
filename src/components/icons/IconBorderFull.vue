<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 10H18V12H8zM8 15H14V17H8z"/><path d="M29,29H3V3H29ZM5,27H27V5H5Z"/></svg>
</template>
<script> 
export default
{ name:"IconBorderFull", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>