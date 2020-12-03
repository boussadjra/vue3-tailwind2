import { PropType } from "vue";

const shaped={

    props:{

        shape: {
            type: String as PropType < "circle" | "rounded" | "square" > ,
            default: "rounded",
        },
    },
    data() {
        return {
            shapes:{
                square:'rounded-none',
                rounded:'rounded',
                circle:'rounded-full'
            }
        }
    },
}


export default shaped;