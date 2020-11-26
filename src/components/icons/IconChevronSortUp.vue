<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 4L23 11 21.6 12.4 16 6.8 10.4 12.4 9 11z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronSortUp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>