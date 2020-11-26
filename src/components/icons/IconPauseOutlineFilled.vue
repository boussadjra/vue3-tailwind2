<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,22H12V10h2Zm6,0H18V10h2Z"/></svg>
</template>
<script> 
export default
{ name:"IconPauseOutlineFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>