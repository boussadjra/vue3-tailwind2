<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 6H22V8H4zM4 12H22V14H4zM4 18H16V20H4zM21 18L28 23 21 28 21 18z"/></svg>
</template>
<script> 
export default
{ name:"IconPlaylist", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>