<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M27.38,28H20.6178L24,21.2358ZM24,18a1,1,0,0,0-.8947.5527l-5,10A1.0005,1.0005,0,0,0,19,30H29a1,1,0,0,0,.9214-1.3892L24.8946,18.5527A1,1,0,0,0,24,18Z"/><path d="M18.746,22.7993A9.999,9.999,0,1,1,14,4V14l6.0971,6.0972,1.22-2.44A2.9849,2.9849,0,0,1,24,16h1.8193A11.993,11.993,0,1,0,14,26a11.9337,11.9337,0,0,0,3.3939-.4966Z"/></svg>
</template>
<script> 
export default
{ name:"IconInProgressWarning", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>