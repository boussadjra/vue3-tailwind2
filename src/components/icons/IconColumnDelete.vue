<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M30 3.41L28.59 2 25 5.59 21.41 2 20 3.41 23.59 7 20 10.59 21.41 12 25 8.41 28.59 12 30 10.59 26.41 7 30 3.41z"/><path d="M24 14V28H18V6H16V28a2.0023 2.0023 0 002 2h6a2.0023 2.0023 0 002-2V14zM10 30H4a2.0021 2.0021 0 01-2-2V8A2.0021 2.0021 0 014 6h6a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0110 30zM4 8V28h6V8z"/></svg>
</template>
<script> 
export default
{ name:"IconColumnDelete", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>