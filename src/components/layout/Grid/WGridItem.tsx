import {
	COL_END,
	COL_END_2XL,
	COL_END_LG,
	COL_END_MD,
	COL_END_SM,
	COL_END_XL,
	COL_END_XS,
	COL_SPAN,
	COL_SPAN_2XL,
	COL_SPAN_LG,
	COL_SPAN_MD,
	COL_SPAN_SM,
	COL_SPAN_XL,
	COL_SPAN_XS,
	COL_START,
	COL_START_2XL,
	COL_START_LG,
	COL_START_MD,
	COL_START_SM,
	COL_START_XL,
	COL_START_XS,
	ROW_END,
	ROW_END_2XL,
	ROW_END_LG,
	ROW_END_MD,
	ROW_END_SM,
	ROW_END_XL,
	ROW_END_XS,
	ROW_SPAN,
	ROW_SPAN_2XL,
	ROW_SPAN_LG,
	ROW_SPAN_MD,
	ROW_SPAN_SM,
	ROW_SPAN_XL,
	ROW_SPAN_XS,
	ROW_START,
	ROW_START_2XL,
	ROW_START_LG,
	ROW_START_MD,
	ROW_START_SM,
	ROW_START_XL,
	ROW_START_XS,
} from '@/utils/constants/grid';
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';
export default defineComponent({
	props: {
		colSpan: { type: [Number, String], default: '' },
		colSpanXs: { type: [Number, String], default: '' },
		colSpanSm: { type: [Number, String], default: '' },
		colSpanMd: { type: [Number, String], default: '' },
		colSpanLg: { type: [Number, String], default: '' },
		colSpanXl: { type: [Number, String], default: '' },
		'col-span-2xl': { type: [Number, String], default: '' },
		rowSpan: { type: [Number, String], default: '' },
		rowSpanXs: { type: [Number, String], default: '' },
		rowSpanSm: { type: [Number, String], default: '' },
		rowSpanMd: { type: [Number, String], default: '' },
		rowSpanLg: { type: [Number, String], default: '' },
		rowSpanXl: { type: [Number, String], default: '' },
		'row-span-2xl': { type: [Number, String], default: '' },
		colStart: { type: [Number, String], default: '' },
		colStartXs: { type: [Number, String], default: '' },
		colStartSm: { type: [Number, String], default: '' },
		colStartMd: { type: [Number, String], default: '' },
		colStartLg: { type: [Number, String], default: '' },
		colStartXl: { type: [Number, String], default: '' },
		'col-start-2xl': { type: [Number, String], default: '' },
		rowStart: { type: [Number, String], default: '' },
		rowStartXs: { type: [Number, String], default: '' },
		rowStartSm: { type: [Number, String], default: '' },
		rowStartMd: { type: [Number, String], default: '' },
		rowStartLg: { type: [Number, String], default: '' },
		rowStartXl: { type: [Number, String], default: '' },
		'row-start-2xl': { type: [Number, String], default: '' },
		colEnd: { type: [Number, String], default: '' },
		colEndXs: { type: [Number, String], default: '' },
		colEndSm: { type: [Number, String], default: '' },
		colEndMd: { type: [Number, String], default: '' },
		colEndLg: { type: [Number, String], default: '' },
		colEndXl: { type: [Number, String], default: '' },
		'col-end-2xl': { type: [Number, String], default: '' },
		rowEnd: { type: [Number, String], default: '' },
		rowEndXs: { type: [Number, String], default: '' },
		rowEndSm: { type: [Number, String], default: '' },
		rowEndMd: { type: [Number, String], default: '' },
		rowEndLg: { type: [Number, String], default: '' },
		rowEndXl: { type: [Number, String], default: '' },
		'row-end-2xl': { type: [Number, String], default: '' },
	},
	setup(props, { slots }) {
		return () => (
			<div
				class={`${COL_SPAN[props.colSpan]}   ${COL_SPAN_XS[props.colSpanXs]}   ${
					COL_SPAN_SM[props.colSpanSm]
				}   ${COL_SPAN_MD[props.colSpanMd]}   ${COL_SPAN_LG[props.colSpanLg]}   ${
					COL_SPAN_XL[props.colSpanXl]
				}   ${COL_SPAN_2XL[props['col-span-2xl']]}   ${ROW_SPAN[props.rowSpan]}   ${
					ROW_SPAN_XS[props.rowSpanXs]
				}   ${ROW_SPAN_SM[props.rowSpanSm]}   ${ROW_SPAN_MD[props.rowSpanMd]}   ${
					ROW_SPAN_LG[props.rowSpanLg]
				}   ${ROW_SPAN_XL[props.rowSpanXl]}   ${ROW_SPAN_2XL[props['row-span-2xl']]}   ${
					COL_START[props.colStart]
				}   ${COL_START_XS[props.colStartXs]}   ${COL_START_SM[props.colStartSm]}   ${
					COL_START_MD[props.colStartMd]
				}   ${COL_START_LG[props.colStartLg]}   ${COL_START_XL[props.colStartXl]}   ${
					COL_START_2XL[props['col-start-2xl']]
				}   ${COL_END[props.colEnd]}   ${COL_END_XS[props.colEndXs]}   ${COL_END_SM[props.colEndSm]}   ${
					COL_END_MD[props.colEndMd]
				}   ${COL_END_LG[props.colEndLg]}   ${COL_END_XL[props.colEndXl]}   ${
					COL_END_2XL[props['col-end-2xl']]
				}   ${ROW_START[props.rowStart]}   ${ROW_START_XS[props.rowStartXs]}   ${
					ROW_START_SM[props.rowStartSm]
				}   ${ROW_START_MD[props.rowStartMd]}   ${ROW_START_LG[props.rowStartLg]}   ${
					ROW_START_XL[props.rowStartXl]
				}   ${ROW_START_2XL[props['row-start-2xl']]}   ${ROW_END[props.rowEnd]}   ${
					ROW_END_XS[props.rowEndXs]
				}   ${ROW_END_SM[props.rowEndSm]}   ${ROW_END_MD[props.rowEndMd]}   ${ROW_END_LG[props.rowEndLg]}   ${
					ROW_END_XL[props.rowEndXl]
				}   ${ROW_END_2XL[props['row-end-2xl']]}`.replace('undefined', '')}
			>
				{' '}
				{slots.default && slots.default()}{' '}
			</div>
		);
	},
});
