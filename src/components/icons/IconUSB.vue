<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M24,15V6a2,2,0,0,0-2-2H10A2,2,0,0,0,8,6v9a2,2,0,0,0-2,2V28H8V17H24V28h2V17A2,2,0,0,0,24,15ZM10,6H22v9H10Z"/><path d="M12 10H15V12H12zM17 10H20V12H17z"/></svg>
</template>
<script> 
export default
{ name:"IconUSB", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>