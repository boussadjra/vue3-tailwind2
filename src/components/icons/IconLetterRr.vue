<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M16 15V11a2 2 0 00-2-2H8V23h2V17h1.48l2.34 6H16l-2.33-6H14A2 2 0 0016 15zm-6-4h4v4H10zM24 13L18 13 18 23 20 23 20 15 24 15 24 13z"/></svg>
</template>
<script> 
export default
{ name:"IconLetterRr", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>