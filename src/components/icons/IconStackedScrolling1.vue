<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M18,30H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H18a2,2,0,0,1,2,2V28A2,2,0,0,1,18,30ZM4,14V28H18V14Z"/><path d="M25,23H23V9H9V7H23a2,2,0,0,1,2,2Z"/><path d="M30,16H28V4H16V2H28a2,2,0,0,1,2,2Z"/></svg>
</template>
<script> 
export default
{ name:"IconStackedScrolling1", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>