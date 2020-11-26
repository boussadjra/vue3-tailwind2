<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 18L6 8 7.4 6.6 16 15.2 24.6 6.6 26 8zM4 22H28V24H4z"/></svg>
</template>
<script> 
export default
{ name:"IconDownToBottom", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>