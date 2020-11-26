<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26 10V22a2 2 0 01-2 2H8a2 2 0 01-2-2V10A2 2 0 018 8H24A2 2 0 0126 10zM8 22H24V10H8zM24 28v4H22V28H10v4H8V28a2 2 0 012-2H22A2 2 0 0124 28zM24 0V4a2 2 0 01-2 2H10A2 2 0 018 4V0h2V4H22V0z"/></svg>
</template>
<script> 
export default
{ name:"IconCarouselVertical", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>