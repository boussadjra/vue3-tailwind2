<template>
<div class="shadow-lg py-4 px-2 border-t">
    <div class="text-2xl text-gray-700 ">Props :</div>

    <table class="table-auto border-collapse w-full mt-2">
        <thead class="text-gray-600 text-left border border-gray-200">
            <th class="p-2">Name</th>
            <th class="p-2">Default</th>
            <th class="p-2">Description</th>
        </thead>
        <tbody class="border border-gray-100 text-gray-500">
            <tr class="border border-gray-200" v-for="(prop,key,index) in component.props">
                <td class="px-2 py-1">{{key==='modelValue'?'v-model':key}}</td>
                <td class="px-2 py-1">{{prop.default}}</td>
                <td class="px-2 py-1">{{prop.type.toString().replace(/function|\(\)|\{|}|native code|\[|\]| /g,'')}}</td>
            </tr>
        </tbody>
    </table>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    VNode
} from 'vue'

export default defineComponent({
    name: "component-reflecter",
    props: {
        component: {
            type: Object as PropType < VNode >
        }
    },
    mounted() {
        console.log('--------------------')
        console.log(this.component)

        console.log('--------------------')
    }
});
</script>

<style>
</style>
