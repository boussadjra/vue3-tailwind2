<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 15H14V17H4zM18 15H28V17H18z"/></svg>
</template>
<script> 
export default
{ name:"IconNotAvailable", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>