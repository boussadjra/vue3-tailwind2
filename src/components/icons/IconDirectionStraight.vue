<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 4L9 11 10.414 12.414 15 7.828 15 28 17 28 17 7.828 21.586 12.414 23 11 16 4z"/></svg>
</template>
<script> 
export default
{ name:"IconDirectionStraight", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>