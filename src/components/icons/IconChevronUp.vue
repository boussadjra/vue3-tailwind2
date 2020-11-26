<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronUp", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>