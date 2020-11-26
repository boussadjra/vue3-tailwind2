<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M6 6H26V8H6zM10 12H22V14H10zM6 18H26V20H6zM10 24H22V26H10z"/></svg>
</template>
<script> 
export default
{ name:"IconTextAlignCenter", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>