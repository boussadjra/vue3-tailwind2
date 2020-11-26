<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M27,4H13a7,7,0,0,0,0,14V28h2V6h5V28h2V6h5ZM13,16A5,5,0,0,1,13,6Z"/></svg>
</template>
<script> 
export default
{ name:"IconParagraph", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>