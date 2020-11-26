<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm8,15H11.85l5.58,5.5728L16,24,8,16l8-8,1.43,1.3926L11.85,15H24Z"/><path fill="none" d="M16 8L17.43 9.393 11.85 15 24 15 24 17 11.85 17 17.43 22.573 16 24 8 16 16 8z" data-icon-path="inner-path"/></svg>
</template>
<script> 
export default
{ name:"IconPreviousFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>