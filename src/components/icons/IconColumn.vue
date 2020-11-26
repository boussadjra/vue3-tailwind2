<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24 4H26V28H24zM18 6V26H14V6h4m0-2H14a2 2 0 00-2 2V26a2 2 0 002 2h4a2 2 0 002-2V6a2 2 0 00-2-2zM6 4H8V28H6z"/></svg>
</template>
<script> 
export default
{ name:"IconColumn", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>