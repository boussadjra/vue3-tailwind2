<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 8H30V10H16zM6 10.59L3.41 8 2 9.41 6 13.41 14 5.41 12.59 4 6 10.59zM16 22H30V24H16zM6 24.59L3.41 22 2 23.41 6 27.41 14 19.41 12.59 18 6 24.59z"/></svg>
</template>
<script> 
export default
{ name:"IconListChecked", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>