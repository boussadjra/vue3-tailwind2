<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M25 13L25 4 23 4 23 6 20 6 20 8 23 8 23 13 20 13 20 15 28 15 28 13 25 13zM8.5 6A3.5 3.5 0 115 9.5 3.5 3.5 0 018.5 6m0-2A5.5 5.5 0 1014 9.5 5.5 5.5 0 008.5 4zM8.5 20A3.5 3.5 0 115 23.5 3.5 3.5 0 018.5 20m0-2A5.5 5.5 0 1014 23.5 5.5 5.5 0 008.5 18zM23.5 20A3.5 3.5 0 1120 23.5 3.5 3.5 0 0123.5 20m0-2A5.5 5.5 0 1029 23.5 5.5 5.5 0 0023.5 18z"/></svg>
</template>
<script> 
export default
{ name:"IconDataSet", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>