<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M9,24a3.51,3.51,0,0,0-.88-1.86L17.65,5.56l-1.73-1L6.35,21.12A3.06,3.06,0,0,0,5.5,21a3.5,3.5,0,1,0,3.15,5H28V24ZM5.5,26A1.5,1.5,0,1,1,7,24.5,1.5,1.5,0,0,1,5.5,26Z"/><path d="M22,21h2a13,13,0,0,0-5.42-10.56l-1.16,1.62A11,11,0,0,1,22,21Z"/></svg>
</template>
<script> 
export default
{ name:"IconAngle", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>