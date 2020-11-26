<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26 6H28V26H26zM18 11H20V26H18zM11 16H13V26H11zM4 20H6V26H4z"/></svg>
</template>
<script> 
export default
{ name:"IconSignalStrength", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>