<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M20,28V6L16,2,12,6V28H2v2H30V28Zm-6,0V6.8281l2-2,2,2V28Z"/></svg>
</template>
<script> 
export default
{ name:"IconMonument", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>