<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M12 6H6A2 2 0 004 8v6a2 2 0 002 2h6a2 2 0 002-2V8A2 2 0 0012 6zM6 14V8h6v6zM26 6H20a2 2 0 00-2 2V24a2 2 0 002 2h6a2 2 0 002-2V8A2 2 0 0026 6zM20 24V8h6V24z"/></svg>
</template>
<script> 
export default
{ name:"IconPanelExpansion", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>