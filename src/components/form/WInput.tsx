import { colorable, outlineable, shaped, sizeable, smoothable, variantable } from '@/mixins';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'w-input',
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		variant: {
			type: String as PropType<'default' | 'danger' | 'success' | 'warning'>,
			default: 'default',
		},
	},

	mixins: [colorable, outlineable, shaped, sizeable, smoothable, variantable],

	data() {
		return {
			uuid: '',
			inputSizes: {
				sm: 'h-8',
				md: 'h-10',
				lg: 'h-12',
			},
		};
	},
	created() {
		this.uuid = `input${new Date().getTime()}`;
	},
	computed: {
		classes() {
			let classes: Array<string> = ['group flex items-center   focus-within:border-navy-blue-500 focus-within:text-navy-blue-500 '];

			classes.push(this.inputSizes[this.size]);
			classes.push(this.shapes[this.shape]);

			if (this.smooth) {
				classes = [
					...classes,
					this.bgSmoothColors[this.variant],
					'text-gray-600 dark:text-gray-300',
					// this.bgSmoothColorsHover[this.variant],
				];
			} else if (this.outlined) {
				classes = [
					...classes,
					'border bg-transparent',
					this.borderColors[this.variant],
					this.colors[this.variant],
					this.borderColorsHover[this.variant],
					this.borderColorsHover[this.variant],
				];
			}
			return classes;
		},
		labelClasses() {
			let classes = ['text-gray-600 dark:text-gray-400 font-light px-1'];
			if (this.shape === 'rounded-full') {
				classes.push('px-4');
			}

			return classes;
		},
	},

	render() {
		return (
			<div class="space-y-2">
				<label class={this.labelClasses} for={this.uuid}>
					{this.label} 
				</label>
				<div class={this.classes}>
					{this.$slots.prepend && <div class="text-md  pl-2 ">{this.$slots.prepend()}</div>}

					<input
						placeholder={this.placeholder}
						id={this.uuid}
						class="bg-transparent placeholder-gray-500 fo   px-4 h-full w-full outline-none focus:text-gray-600 dark:focus:text-gray-300 "
					/>
					{this.$slots.append && <div class="text-md  pr-2">{this.$slots.append()}</div>}
				</div>
			</div>
		);
	},
});
