<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 2A2 2 0 002 4V20l1 2 1-2V4H8V14l1 2 1-2V2zM28 2H14v8l1 2 1-2V4h2V17l1 2 1-2V4h4V14l1 2 1-2V4h2V24l1 2 1-2V4A2 2 0 0028 2zM14 28L13 30 12 28 12 16 14 16 14 28z"/><path d="M24 26L23 28 22 26 22 20 24 20 24 26zM8 24L7 26 6 24 6 18 8 18 8 24z"/></svg>
</template>
<script> 
export default
{ name:"IconIceAccretion", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>