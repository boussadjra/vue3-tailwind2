<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M23 28a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H22V18h1a5 5 0 010 10zM16 18H20V20H16zM10 18H14V20H10zM4 18H8V20H4zM21 15H20V13h1a3 3 0 10-3-3H16a5 5 0 115 5zM14 13H18V15H14zM8 13H12V15H8z"/></svg>
</template>
<script> 
export default
{ name:"IconWindyDust", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>