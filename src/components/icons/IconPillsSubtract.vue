<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22,14a7.94,7.94,0,0,0-4,1.0825V9A7,7,0,0,0,4,9V23a6.9857,6.9857,0,0,0,12.2756,4.5768A7.9966,7.9966,0,1,0,22,14ZM11,4a5.0059,5.0059,0,0,1,5,5v6H6V9A5.0059,5.0059,0,0,1,11,4Zm0,24a5.0059,5.0059,0,0,1-5-5V17h9.765a7.9564,7.9564,0,0,0-.7239,8.9319A5.0147,5.0147,0,0,1,11,28Zm11,0a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,22,28Z"/><path d="M19 21H25V23H19z"/></svg>
</template>
<script> 
export default
{ name:"IconPillsSubtract", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>