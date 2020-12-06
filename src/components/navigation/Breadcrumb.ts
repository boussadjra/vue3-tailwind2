import { defineComponent, h, Slot, Transition, VNode } from 'vue';
export default defineComponent({
    name: 'breadcrumb',
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    mounted() {



    },
    methods: {
        renderCrumb(token: string | VNode, index: number, length: number) {

            let renderedToken = typeof token === "string" ? h('span', token) : h(token)

            if (index < length - 1) {
                return [h(renderedToken), h('span', this.$slots.separator ? this.$slots.separator() : '/')];
            } else {


                return h(renderedToken);
            }
        }
    },
    computed: {
        customSlots(): any {
            if (this.path) {

                let pathTokens = this.path.split('/').filter(token => token)



                return pathTokens.map((token, index) => {
                    return this.renderCrumb(token, index, pathTokens.length)

                })
            } else {
                let defaultSlots = this.$slots.default ? this.$slots.default() : [];

                return defaultSlots.map((slot, index) => {
                    return this.renderCrumb(slot, index, defaultSlots.length)

                });
            }
        },
    },
    render(): VNode {
        return h(
            'div',
            { class: 'px-4 py-4 min-w w-full rounded flex text-gray-600 space-x-2 items-center bg-gray-100 min-w-max' },
            this.customSlots
        );
    },
});
