<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 26H28V28H4zM4 19H28V21H4zM26 6v6H6V6H26m0-2H6A2 2 0 004 6v6a2 2 0 002 2H26a2 2 0 002-2V6a2 2 0 00-2-2z"/></svg>
</template>
<script> 
export default
{ name:"IconViewMode1", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>