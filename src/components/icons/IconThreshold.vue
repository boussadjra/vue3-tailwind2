<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26,4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6A2.0023,2.0023,0,0,0,26,4ZM6,6H26V16H24v2h2v2H24v2h2v2H24v2H22V24H20v2H18V24H16v2H14V24H12v2H10V24H8v2H6Z"/><path d="M8 20H10V22H8zM12 20H14V22H12zM16 20H18V22H16zM20 20H22V22H20zM8 16H10V18H8zM16 16H18V18H16zM20 16H22V18H20zM20 12H22V14H20zM20 8H22V10H20z"/></svg>
</template>
<script> 
export default
{ name:"IconThreshold", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>