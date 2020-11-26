<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26 20H6a2 2 0 00-2 2v4a2 2 0 002 2H26a2 2 0 002-2V22A2 2 0 0026 20zm0 6H6V22H26zM17 7.828L19.586 10.414 21 9 16 4 11 9 12.414 10.414 15 7.828 15 14 4 14 4 16 28 16 28 14 17 14 17 7.828z"/></svg>
</template>
<script> 
export default
{ name:"IconRowCollapse", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>