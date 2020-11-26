<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10 6H28V8H10zM10 24H28V26H10zM10 15H28V17H10zM4 15H6V17H4zM4 6H6V8H4zM4 24H6V26H4z"/></svg>
</template>
<script> 
export default
{ name:"IconList", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>