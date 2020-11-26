<template>
<svg :height="height" :width="width" viewBox="0 0 32 32" class="fill-current">
 <path d="M27 28V6H19V28H15V14H7V28H4V2H2V28a2 2 0 002 2H30V28zM13 28H9V16h4zm12 0H21V8h4zM19 2H27V4H19z"/><path d="M7 10H15V12H7z"/></svg>
</template>
<script> 
export default
{ name:"IconChartColumnTarget", 
 props:{ height: { type:  Number, default: 20, }, width: { type:  Number, default: 20, }, } 
}
</script>