<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M2 28H30V30H2zM7 5.828L7 24 9 24 9 5.828 12.586 9.414 14 8 8 2 2 8 3.414 9.414 7 5.828zM23 5.828L23 24 25 24 25 5.828 28.586 9.414 30 8 24 2 18 8 19.414 9.414 23 5.828z"/></svg>
</template>
<script> 
export default
{ name:"IconThisSideUp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>