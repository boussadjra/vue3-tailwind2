<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18 5H28V7H18zM10.6 5L4 5 4 7 9.4 7 18.4 27 28 27 28 25 19.6 25z"/></svg>
</template>
<script> 
export default
{ name:"IconMacOption", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>