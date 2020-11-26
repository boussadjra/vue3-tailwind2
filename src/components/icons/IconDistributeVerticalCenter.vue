<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 21H26V20a2.0023 2.0023 0 00-2-2H8a2.0023 2.0023 0 00-2 2v1H2v2H6v1a2.0023 2.0023 0 002 2H24a2.0023 2.0023 0 002-2V23h4zm-6 3H8V20l16-.001zM30 9H22V8a2.0023 2.0023 0 00-2-2H12a2.0023 2.0023 0 00-2 2V9H2v2h8v1a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V11h8zM20 12H12V8l8-.001z"/></svg>
</template>
<script> 
export default
{ name:"IconDistributeVerticalCenter", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>