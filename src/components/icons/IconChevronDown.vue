<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"/></svg>
</template>
<script> 
export default
{ name:"IconChevronDown", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>