<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M19,28H13a2.0023,2.0023,0,0,1-2-2V21H6a2.0023,2.0023,0,0,1-2-2V13a2.002,2.002,0,0,1,2-2h5V6a2.002,2.002,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v5h5a2.0023,2.0023,0,0,1,2,2v6a2.0027,2.0027,0,0,1-2,2H21v5A2.0027,2.0027,0,0,1,19,28ZM6,13v6h7v7h6V19h7V13H19V6H13v7Z"/></svg>
</template>
<script> 
export default
{ name:"IconHealthCross", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>