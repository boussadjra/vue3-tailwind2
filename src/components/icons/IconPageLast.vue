<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18 16L8 26 6.6 24.6 15.2 16 6.6 7.4 8 6zM22 4H24V28H22z"/></svg>
</template>
<script> 
export default
{ name:"IconPageLast", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>