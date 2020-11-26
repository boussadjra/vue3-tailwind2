<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M15 22H17V28H15z" transform="rotate(90 16 25)"/><path d="M25,30H7a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,7,2H25a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,25,30ZM7,4V28H25V4Z"/></svg>
</template>
<script> 
export default
{ name:"IconTablet", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>