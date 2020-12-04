

import { PropType } from "vue";

const sizeable={

    props:{
        size: {
            type: String as PropType < "xs" | "sm" | "md" | "lg" > ,
            default: "md",
        },
    },
    data() {
        return {
            sizes: {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
                full: "full",
            },
        }
    },
}


export default sizeable;