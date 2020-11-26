<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM22,18H10V14H22Z"/><path fill="none" d="M22,18H10V14H22Z" data-icon-path="inner-path"/></svg>
</template>
<script> 
export default
{ name:"IconCheckboxIndeterminateFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>