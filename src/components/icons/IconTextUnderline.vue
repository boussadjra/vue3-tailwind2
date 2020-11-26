<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M4 26H28V28H4zM16 23a7 7 0 01-7-7V5h2V16a5 5 0 0010 0V5h2V16A7 7 0 0116 23z"/></svg>
</template>
<script> 
export default
{ name:"IconTextUnderline", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>