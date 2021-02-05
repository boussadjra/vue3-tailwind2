import { COL_END, COL_SPAN, COL_START, ROW_END, ROW_SPAN, ROW_START } from '@/utils/constants/grid';
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';

export default defineComponent({
	props: {
		colSpan: {
			type: [Number, String],
			default: '',
		},
		rowSpan: {
			type: [Number, String],
			default: '',
		},
		colStart: {
			type: [Number, String],
			default: '',
		},
		rowStart: {
			type: [Number, String],
			default: '',
		},
		colEnd: {
			type: [Number, String],
			default: '',
		},
		rowEnd: {
			type: [Number, String],
			default: '',
		},
	},

	setup(props, { slots }) {
		return () => (
			<div
				class={` 
			${COL_SPAN[props.colSpan]}
			${ROW_SPAN[props.rowSpan]}
			${COL_START[props.colStart]}
			${COL_END[props.colEnd]}
			${ROW_START[props.rowStart]}
			${ROW_END[props.rowEnd]}

                `}
			>
				{slots.default && slots.default()}
			</div>
		);
	},
});
