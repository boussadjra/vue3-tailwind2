import { PropType } from "vue";

const shaped = {

    props: {
        shape: {
            type: String as PropType<"rounded-none" | "rounded" | "rounded-full">,
            default: "rounded",
        },
    },
    data() {
        return {
            shapes: {
                "rounded-none": "rounded-none",
                rounded: "rounded",
                "rounded-full": "rounded-full",
            },
        }
    },
}


export default shaped;