<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 15H24V17H8z"/></svg>
</template>
<script> 
export default
{ name:"IconSubtract", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>