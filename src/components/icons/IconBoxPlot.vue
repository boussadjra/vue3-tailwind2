<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22,6V4H12V6h4V8H12V20h4v2H12v2H22V22H18V20h4V8H18V6ZM14,18V15h6v3Zm6-5H14V10h6Z"/><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"/></svg>
</template>
<script> 
export default
{ name:"IconBoxPlot", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>