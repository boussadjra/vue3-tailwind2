<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M21,28H11a2.0023,2.0023,0,0,1-2-2V16H4a1,1,0,0,1-.707-1.707l12-12a.9994.9994,0,0,1,1.414,0l12,12A1,1,0,0,1,28,16H23V26A2.0027,2.0027,0,0,1,21,28ZM6.4141,14H11V26H21V14h4.5859L16,4.4141Z"/></svg>
</template>
<script> 
export default
{ name:"IconMacShift", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>