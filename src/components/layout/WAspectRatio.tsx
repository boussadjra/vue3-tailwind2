import { ASPECT_H, ASPECT_W } from '@/utils/constants/aspect-ratios';
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	name: 'w-aspect-ratio',
	props: {
		value: {
			type: String,
			default: '',
		},
	},

	setup(props, { slots }) {
		const [width, height] = props.value.split('/').map((size) => Number(size));

		return () => (
			<div class={`${ASPECT_W[width - 1]} ${ASPECT_H[height - 1]}`}>{slots.default && slots.default()}</div>
		);
	},
});
