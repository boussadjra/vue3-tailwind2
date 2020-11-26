<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z"/><path d="M10 7H22V9H10z" transform="rotate(-180 16 8)"/><path d="M12 12H20V14H12z" transform="rotate(-180 16 13)"/></svg>
</template>
<script> 
export default
{ name:"IconAlignBoxTopCenter", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>