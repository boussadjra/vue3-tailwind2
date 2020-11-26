<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22 8H21V2H19V8H13V2H11V8H10a2 2 0 00-2 2V22a2 2 0 002 2h1v6h2V24h6v6h2V24h1a2 2 0 002-2V10A2 2 0 0022 8zM10 22V10H22V22zM25 14H27V18H25z"/></svg>
</template>
<script> 
export default
{ name:"IconWatch", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>