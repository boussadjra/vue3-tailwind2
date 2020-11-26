<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M15 5H17V9H15zM15 11H17V15H15zM15 17H17V21H15zM15 23H17V27H15z"/></svg>
</template>
<script> 
export default
{ name:"IconBarrier", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>