<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22 21h2L17 4H15L8 21h2l1.61-4h8.74zm-9.57-6l3.44-8.37h.26L19.54 15zM6 24H26V28H6z"/></svg>
</template>
<script> 
export default
{ name:"IconTextColor", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>