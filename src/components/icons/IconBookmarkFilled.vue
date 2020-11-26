<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24,2H8A2,2,0,0,0,6,4V30l10-5.0538L26,30V4A2,2,0,0,0,24,2Z"/></svg>
</template>
<script> 
export default
{ name:"IconBookmarkFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>