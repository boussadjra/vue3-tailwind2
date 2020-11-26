<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M31 19L31 31 19 31 31 19z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronMini", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>