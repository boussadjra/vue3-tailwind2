<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 28L9 21 10.4 19.6 16 25.2 21.6 19.6 23 21z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronSortDown", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>