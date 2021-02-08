import {
	COLS,
	ROWS,
	GAP,
	GAP_X,
	GAP_Y,
	COLS_XS,
	COLS_SM,
	COLS_MD,
	COLS_LG,
	COLS_XL,
	COLS_2XL,
	ROWS_XS,
	ROWS_SM,
	ROWS_MD,
	ROWS_LG,
	ROWS_XL,
	ROWS_2XL,
} from '@/utils/constants/grid';
//  import  *  as  gridProps  from  '@/utils/constants/grid';
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name:'w-grid',
	props: {
		cols: {
			type: [String, Number],
			default: 1,
		},
		colsXs: {
			type: [String, Number],
			default: 0,
		},
		colsSm: {
			type: [String, Number],
			default: 0,
		},
		colsMd: {
			type: [String, Number],
			default: 0,
		},
		colsLg: {
			type: [String, Number],
			default: 0,
		},
		colsXl: {
			type: [String, Number],
			default: 0,
		},
		'cols-2xl': {
			type: [String, Number],
			default: 0,
		},
		rows: {
			type: [String, Number],
			default: 1,
		},
		rowsXs: {
			type: [String, Number],
			default: 0,
		},
		rowsSm: {
			type: [String, Number],
			default: 0,
		},
		rowsMd: {
			type: [String, Number],
			default: 0,
		},
		rowsLg: {
			type: [String, Number],
			default: 0,
		},
		rowsXl: {
			type: [String, Number],
			default: 0,
		},
		'rows-2xl': {
			type: [String, Number],
			default: 0,
		},
		gapX: {
			type: [Number, String],
			default: 0,
		},
		gapY: {
			type: [Number, String],
			default: 0,
		},
		gap: {
			type: [Number, String],
			default: 0,
		},

		widthFull: {
			type: Boolean,
			default: true,
		},
		showLines: {
			type: Boolean,
			default: false,
		},
	},

	setup(props, { slots }) {
		const classes = computed(() => {
			return `grid    ${COLS[props.cols]}  ${COLS_XS[props.colsXs] ? COLS_XS[props.colsXs] : ''}  ${
				COLS_SM[props.colsSm] ? COLS_SM[props.colsSm] : ''
			}  ${COLS_MD[props.colsMd] ? COLS_MD[props.colsMd] : ''}  ${
				COLS_LG[props.colsLg] ? COLS_LG[props.colsLg] : ''
			}  ${COLS_XL[props.colsXl] ? COLS_XL[props.colsXl] : ''}  ${
				COLS_2XL[props['cols-2xl']] ? COLS_2XL[props['cols-2xl']] : ''
			}  ${ROWS[props.rows]}  ${ROWS_XS[props.rowsXs] ? ROWS_XS[props.rowsXs] : ''}  ${
				ROWS_SM[props.rowsSm] ? ROWS_SM[props.rowsSm] : ''
			}  ${ROWS_MD[props.rowsMd] ? ROWS_MD[props.rowsMd] : ''}  ${
				ROWS_LG[props.rowsLg] ? ROWS_LG[props.rowsLg] : ''
			}  ${ROWS_XL[props.rowsXl] ? ROWS_XL[props.rowsXl] : ''}  ${
				ROWS_2XL[props['rows-2xl']] ? ROWS_2XL[props['rows-2xl']] : ''
			}  ${GAP[props.gap]}  ${GAP_X[props.gapX]}  ${GAP_Y[props.gapY]}`;
		});

		return () => (
			<div
				class={classes.value
					.replace(/[\n+]/g, '')
					.replace(/undefined/g, '')
					.replace(/    /g, '')}
			>
				{slots.default && slots.default()}
			</div>
		);
	},
});
