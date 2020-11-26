<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M22 30H10V25H6l10-9 10 9H22zM16 16L6 7h4V2H22V7h4z"/></svg>
</template>
<script> 
export default
{ name:"IconPressureFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>