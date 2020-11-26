<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M8 30H2a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2V28A2 2 0 018 30zM2 14V28H8V14zM20 30H14a2 2 0 01-2-2V14a2 2 0 012-2h6a2 2 0 012 2V28A2 2 0 0120 30zM14 14V28h6V14z"/><path d="M27,21H25V9H17V7h8a2,2,0,0,1,2,2Z"/><path d="M32,16H30V4H22V2h8a2,2,0,0,1,2,2Z"/></svg>
</template>
<script> 
export default
{ name:"IconStackedScrolling2", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>