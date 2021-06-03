import useShape from '@/composable/useShape';
import useSize from '@/composable/useSize';
import useVariant from '@/composable/useVariant';
import withColorProps from '@/utils/props/withColorProps';
import withOutlineProps from '@/utils/props/withOutlineProps';
import withShapeProps from '@/utils/props/withShapeProps';
import withSizeProps from '@/utils/props/withSizeProps';
import withSmoothProps from '@/utils/props/withSmoothProps';
import withVariantProps from '@/utils/props/withVariantProps';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'w-button',
	props: {
		...withColorProps(),
		...withVariantProps(),
		...withShapeProps(),
		...withOutlineProps(),
		...withSmoothProps(),
		...withSizeProps(),

		text: {
			type: Boolean,
			default: false,
		},
		raised: {
			type: Boolean,
			default: false,
		},
		circle: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
	},

	setup(props, { slots }) {
		const { classes: variantClasses } = useVariant(props as any);
		const { classes: shapeClasses } = useShape(props as any);
		const { classes: sizeClasses } = useSize(props as any);

		return () => (
			<button
			role="button"
				class={[
					'flex items-center justify-center shadow-md cursor-pointer hover:shadow-lg minw',
					// defaultColorClasses.value,
					variantClasses.value,
					shapeClasses.value,
					sizeClasses.value,
					props.full ? 'w-full ' : !props.circle ? 'max-w-max' : '',
				]}
			>
				<div class="ml-2">{slots.prepend?.()}</div>
				<div class="whitespace-nowrap">{slots.default?.()}</div>

				<div class="mr-2">{slots.append?.()}</div>
			</button>
		);
	},
});
