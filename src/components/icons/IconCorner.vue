<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28,9H14V6H6v8H9V28h2V14h3V11H28ZM12,12H8V8h4Z"/></svg>
</template>
<script> 
export default
{ name:"IconCorner", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>