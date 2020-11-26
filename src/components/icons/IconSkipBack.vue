<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M27 28a1 1 0 01-.5-.13l-19-11a1 1 0 010-1.74l19-11a1 1 0 011 0A1 1 0 0128 5V27a1 1 0 01-1 1zM10 16l16 9.27V6.73zM2 4H4V28H2z"/></svg>
</template>
<script> 
export default
{ name:"IconSkipBack", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>