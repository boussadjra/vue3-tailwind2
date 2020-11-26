<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M17,11H13v2h4v2H14v2h3v2H13v2h4a2,2,0,0,0,2-2V13A2,2,0,0,0,17,11Z"/></svg>
</template>
<script> 
export default
{ name:"IconNumberSmall3", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>