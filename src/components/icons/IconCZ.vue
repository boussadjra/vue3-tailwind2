<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M14 23H9a2 2 0 01-2-2V15a2 2 0 012-2h5v2H9v6h5zM24 9L16 9 16 11 22 11 16 21 16 23 24 23 24 21 18 21 24 11 24 9z"/></svg>
</template>
<script> 
export default
{ name:"IconCZ", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>