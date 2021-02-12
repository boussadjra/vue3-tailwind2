import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';
import { MAX_WIDTH } from '@/utils/constants/sizes';
export default defineComponent({
	props: {
		maxWidth: {
			type: String as PropType<
				'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
			>,
			default: 'w-full',
		},
	},

	setup(props, { slots }) {
		return () => <div class={`${MAX_WIDTH[props.maxWidth]} p-4`}>{slots.default && slots.default()}</div>;
	},
});
