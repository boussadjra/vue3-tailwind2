<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <circle cx="23" cy="25" r="1"/><path d="M26 22v6H6V22H26m0-2H6a2 2 0 00-2 2v6a2 2 0 002 2H26a2 2 0 002-2V22a2 2 0 00-2-2zM20.59 10.59L17 14.17 17 2 15 2 15 14.17 11.41 10.59 10 12 16 18 22 12 20.59 10.59z"/><path d="M8 24H20V26H8z"/></svg>
</template>
<script> 
export default
{ name:"IconLaunchStudy1", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>