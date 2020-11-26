<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 18L4 20 10.586 20 2 28.582 3.414 30 12 21.414 12 28 14 28 14 18 4 18zM30 3.416L28.592 2 20 10.586 20 4 18 4 18 14 28 14 28 12 21.414 12 30 3.416z"/></svg>
</template>
<script> 
export default
{ name:"IconMinimize", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>