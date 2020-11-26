<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 26H20V28H16zM12 22H18V24H12zM8 18H18V20H8zM8 14H20V16H8zM10 10H24V12H10zM8 6H26V8H8z"/></svg>
</template>
<script> 
export default
{ name:"IconTornado", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>