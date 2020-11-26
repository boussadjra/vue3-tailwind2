<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26 4H28V28H26zM11.414 20.586L7.828 17 22 17 22 15 7.828 15 11.414 11.414 10 10 4 16 10 22 11.414 20.586z"/></svg>
</template>
<script> 
export default
{ name:"IconExit", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>