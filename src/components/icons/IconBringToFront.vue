<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M28,10H22V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V20a2.0023,2.0023,0,0,0,2,2h6v6a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A2,2,0,0,0,28,10ZM4,20,3.9985,4H20v6H12a2,2,0,0,0-2,2v8Z"/></svg>
</template>
<script> 
export default
{ name:"IconBringToFront", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>