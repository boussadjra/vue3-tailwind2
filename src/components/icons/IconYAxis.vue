<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8,26V7.8281l2.5859,2.586L12,9,7,4,2,9l1.4141,1.4141L6,7.8281V26a2.0023,2.0023,0,0,0,2,2H28V26Z"/></svg>
</template>
<script> 
export default
{ name:"IconYAxis", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>