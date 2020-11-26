<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12 6H10A2 2 0 008 8V24a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2zM22 6H20a2 2 0 00-2 2V24a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2z"/></svg>
</template>
<script> 
export default
{ name:"IconPauseFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>