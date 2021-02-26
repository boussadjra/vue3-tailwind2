import { PropType } from "vue";

const inputable={
    props: {
		modelValue: [String, Number],
		value: [String, Number],
		label: {
			type: String,
			default: '',
		},
		variant: {
			type: String as PropType<'default' | 'danger' | 'success' | 'warning'>,
			default: 'default',
		},
	},
}

export default inputable;