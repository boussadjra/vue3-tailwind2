<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12 11L15 11 15 23 17 23 17 11 20 11 20 9 12 9 12 11z"/></svg>
</template>
<script> 
export default
{ name:"IconT", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>