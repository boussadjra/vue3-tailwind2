<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M6,30H4V2H28l-5.8,9L28,20H6Z"/></svg>
</template>
<script> 
export default
{ name:"IconFlagFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>