<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M1 8L1 10 7 10 7 24 9 24 9 10 15 10 15 8 1 8zM17 8L17 10 23 10 23 24 25 24 25 10 31 10 31 8 17 8z"/></svg>
</template>
<script> 
export default
{ name:"IconTextAllCaps", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>