<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M10,30H4a2,2,0,0,1-2-2V16a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2V28A2,2,0,0,1,10,30ZM4,16V28h6V16Z"/><path d="M28,4H6A2,2,0,0,0,4,6v6H6V6H28V20H14v2h2v4H14v2h9V26H18V22H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"/></svg>
</template>
<script> 
export default
{ name:"IconDevices", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>