
import { computed, ref } from 'vue'
export enum IVariant { default = "default", primary = "primary", danger = "danger", info = "info", success = "success", warning = "warning" }
enum IColors {

    bgColors = 'bgColors', borderColors = 'borderColors', bgColorsHover = 'bgColorsHover', colorsHover = 'colorsHover', borderColorsHover = 'borderColorsHover', bgSmoothColors = 'bgSmoothColors', bgSmoothColorsHover = 'bgSmoothColorsHover', smoothColors = 'smoothColors', colors = 'colors'
}

export interface IVariantProp {
    variant: IVariant,
    smooth: boolean,
    outlined: boolean,
    raised: boolean,
    text: boolean,
    circle:boolean

}
interface ITheme {
    [key: string]: {
        [key in IVariant]: string
    }
}

const theme: ITheme = {
    bgColors: {
        default: "bg-gray-400 dark:bg-gray-700",
        primary: "bg-navy-blue-700 dark:bg-navy-blue-500",
        info: "bg-blue-500 dark:bg-blue-400",
        danger: "bg-red-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
    },
    borderColors: {
        default: "border-gray-400",
        primary: "border-navy-blue-700 dark:border-navy-blue-500",
        info: "border-blue-700",
        danger: "border-red-500",
        success: "border-green-500",
        warning: "border-yellow-500",
    },
    bgColorsHover: {
        default: "hover:bg-gray-500 dark:hover:bg-gray-800",
        primary: "hover:bg-navy-blue-800",
        info: "hover:bg-blue-800",
        danger: "hover:bg-red-600",
        success: "hover:bg-green-600",
        warning: "hover:bg-yellow-600",
    },
    colorsHover: {
        default: "hover:text-gray-500",
        primary: "hover:text-navy-blue-800",
        info: "hover:text-blue-800",
        danger: "hover:text-red-600",
        success: "hover:text-green-600",
        warning: "hover:text-yellow-600",
    },
    borderColorsHover: {
        default: "hover:border-gray-500",
        primary: "hover:border-navy-blue-800",
        info: "hover:border-blue-800",
        danger: "hover:border-red-600",
        success: "hover:border-green-600",
        warning: "hover:border-yellow-600",
    },
    bgSmoothColors: {
        default: "bg-gray-200 dark:bg-gray-500",
        primary: "bg-navy-blue-200 dark:bg-navy-blue-400",
        info: "bg-blue-200",
        danger: "bg-red-200 dark:bg-red-300",
        success: "bg-green-200 dark:bg-green-300",
        warning: "bg-yellow-200 dark:bg-yellow-300",
    },
    bgSmoothColorsHover: {
        default: "hover:bg-gray-300 dark:hover:bg-gray-500 ",
        primary: "hover:bg-navy-blue-300",
        info: "hover:bg-blue-300",
        danger: "hover:bg-red-300",
        success: "hover:bg-green-300",
        warning: "hover:bg-yellow-300",
    },
    smoothColors: {
        default: "text-gray-400 dark:text-gray-700",
        primary: "text-navy-blue-700 dark:text-navy-blue-600",
        info: "text-blue-800",
        danger: "text-red-600",
        success: "text-green-600",
        warning: "text-yellow-600",
    },
    colors: {
        default: "text-gray-600 dark:text-gray-100",
        primary: "text-navy-blue-700 dark:text-navy-blue-400",
        info: "text-blue-800",
        danger: "text-red-600",
        success: "text-green-600",
        warning: "text-yellow-600",
    },
}

const useVariant = (props: IVariantProp) => {

    const defaultColorClasses = computed(() => ["text-gray-100",
        theme.bgColors[props.variant],
        theme.bgColorsHover[props.variant]])

    const smoothColorClasses = computed(() => [theme.bgSmoothColors[props.variant], theme.smoothColors[props.variant], theme.bgSmoothColorsHover[props.variant]])
    const outlinedColorClasses = computed(() => ['border bg-transparent', theme.borderColors[props.variant], theme.colors[props.variant], theme.borderColorsHover[props.variant]])
    const raisedColorClasses = computed(() => ['bg-transparent', theme.colors[props.variant]])
    const textColorClasses = computed(() => ['bg-transparent shadow-none', theme.colors[props.variant]])

    const classes = computed(() => {
        let _classes: Array<string> = [];

        if (props.smooth) {
            _classes = [...smoothColorClasses.value]
        } else if (props.outlined) {
            _classes = [...outlinedColorClasses.value]

        } else if (props.raised) {
            _classes = [...raisedColorClasses.value]
        } else if (props.text ) {
            _classes = [...textColorClasses.value]

        } else {
            _classes = [...defaultColorClasses.value]
        }
    
        return _classes;

    })


    return { classes }
}


export default useVariant;