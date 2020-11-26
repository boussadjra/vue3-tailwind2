<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm-4.5,9A2.5,2.5,0,1,1,9,13.5,2.48,2.48,0,0,1,11.5,11ZM16,24a8.11,8.11,0,0,1-7-4H23A8.11,8.11,0,0,1,16,24Zm4.5-8A2.5,2.5,0,1,1,23,13.5,2.48,2.48,0,0,1,20.5,16Z"/></svg>
</template>
<script> 
export default
{ name:"IconFaceActivatedFilled", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>