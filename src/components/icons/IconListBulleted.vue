<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <circle cx="7" cy="9" r="3"/><circle cx="7" cy="23" r="3"/><path d="M16 22H30V24H16zM16 8H30V10H16z"/></svg>
</template>
<script> 
export default
{ name:"IconListBulleted", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>