import { colorable, outlineable, shaped, sizeable, smoothable, variantable } from '@/mixins';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'w-checkbox',
	props: {
		modelValue: [String, Number],
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
			inputSizes: {
				sm: 'h-4 w-4',
				md: 'h-6 w-6',
				lg: 'h-8 w-8',
			},
			checkMarkSizes: {
				sm: 'h-3 w-3',
				md: 'h-4 w-4',
				lg: 'h-6 w-6',
			},
		};
	},
	created() {},
	computed: {
		classes() {
			let classes: Array<string> = [
				'   flex flex-shrink-0   justify-center items-center mr-2 focus-within:border-blue-500',
			];
			classes.push(this.inputSizes[this.size]);
			classes.push(this.shapes[this.shape]);
			if (this.outlined) {
				classes = [
					...classes,
					'border-2 bg-transparent',
					this.borderColors[this.variant],
					this.colors[this.variant],
					this.borderColorsHover[this.variant],
					this.borderColorsHover[this.variant],
				];
			} else {
				classes = [...classes, 'text-gray-100', this.bgColors[this.variant], this.bgColorsHover[this.variant]];
			}
			return classes;
		},
		checkMarkClasses() {
			let classes = ['fill-current hidden   dark:text-gray-300 pointer-events-none'];

			classes.push(this.checkMarkSizes[this.size]);

			return classes;
		},
		helperClasses() {
			let classes = ['text-xs  px-1'];
			if (this.shape === 'rounded-full') {
				classes.push('px-4');
			}

			return classes;
		},
	},

	render() {
		return (
			<div class="space-y-2">
				<label class="flex justify-start items-center ">
					<div class={this.classes} style={{ padding: '1px' }}>
						<input
							type="checkbox"
							class="opacity-0 absolute"
							{...this.$attrs}
							value={this.modelValue}
							onInput={($event: Event) =>
								this.$emit('update:modelValue', ($event.target as HTMLInputElement).value)
							}
						/>
						<svg class={this.checkMarkClasses} viewBox="0 0 20 20">
							<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
						</svg>
					</div>
					<div class="select-none">{this.$slots.label ? this.$slots.label() : this.label}</div>
				</label>
				<div>{this.$slots.helper && <span class={this.helperClasses}>{this.$slots.helper()}</span>}</div>
			</div>
		);
	},
});
