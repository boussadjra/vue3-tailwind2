
import { ComponentPropsOptions, PropType } from "@vue/runtime-core"

const withVariantProps = (props?: ComponentPropsOptions) => {
  return {
    variant: {
      type: String as PropType<"default" | "primary" | "danger" | "info" | "success" | "warning">,
      default: 'default',
    },
    ...props
  }
}



export default withVariantProps;
