import { PropType } from "vue";

const variantable={

    props:{
        variant: {
            type: String as PropType <
                "default" | "primary" | "danger" | "success" | "warning" > ,
            default: "primary",
        },  
    },
    data() {
        return {
            bgColors: {
                default: "bg-gray-400",
                primary: "bg-purple-700",
                danger: "bg-red-500",
                success: "bg-green-500",
                warning: "bg-yellow-500",
            },
            borderColors: {
                default: "border-gray-400",
                primary: "border-purple-700",
                danger: "border-red-500",
                success: "border-green-500",
                warning: "border-yellow-500",
            },
            bgColorsHover: {
                default: "hover:bg-gray-500",
                primary: "hover:bg-purple-800",
                danger: "hover:bg-red-600",
                success: "hover:bg-green-600",
                warning: "hover:bg-yellow-600",
            },
            colorsHover: {
                default: "hover:bg-gray-500",
                primary: "hover:bg-purple-800",
                danger: "hover:bg-red-600",
                success: "hover:bg-green-600",
                warning: "hover:bg-yellow-600",
            },
            borderColorsHover: {
                default: "hover:border-gray-500",
                primary: "hover:border-purple-800",
                danger: "hover:border-red-600",
                success: "hover:border-green-600",
                warning: "hover:border-yellow-600",
            },
            bgSmoothColors: {
                default: "bg-gray-200",
                primary: "bg-purple-200",
                danger: "bg-red-200",
                success: "bg-green-200",
                warning: "bg-yellow-200",
            },
            bgSmoothColorsHover: {
                default: "hover:bg-gray-300",
                primary: "hover:bg-purple-300",
                danger: "hover:bg-red-300",
                success: "hover:bg-green-300",
                warning: "hover:bg-yellow-300",
            },
            colors: {
                default: "text-gray-600",
                primary: "text-purple-700",
                danger: "text-red-600",
                success: "text-green-600",
                warning: "text-yellow-600",
            },
            padding: {
                "xs": "px-1 py-0",
                "sm": "px-4 py-1",
                "md": "px-6 py-2",
                "lg": "px-8 py-4",

            }
        }
    },
}


export default variantable;