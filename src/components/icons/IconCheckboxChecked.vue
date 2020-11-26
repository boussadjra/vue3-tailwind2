<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"/><path d="M14 21.5L9 16.54 10.59 15 14 18.35 21.41 11 23 12.58 14 21.5z"/></svg>
</template>
<script> 
export default
{ name:"IconCheckboxChecked", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>