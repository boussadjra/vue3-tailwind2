<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 23H24a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24V21h6zM18 23H14a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.002 2.002 0 012 2V21A2.0023 2.0023 0 0118 23zM14 11V21h4V11zM6 23H2V9H6a4.0045 4.0045 0 014 4v6A4.0045 4.0045 0 016 23zM4 21H6a2.002 2.002 0 002-2V13a2.002 2.002 0 00-2-2H4z"/></svg>
</template>
<script> 
export default
{ name:"IconDOC", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>