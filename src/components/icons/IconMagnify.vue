<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12,21H4V4H22v8h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V21a2,2,0,0,0,2,2h8Z"/><path d="M30,28.58l-3.11-3.11a6,6,0,1,0-1.42,1.42L28.58,30ZM22,26a4,4,0,1,1,4-4A4,4,0,0,1,22,26Z"/></svg>
</template>
<script> 
export default
{ name:"IconMagnify", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>