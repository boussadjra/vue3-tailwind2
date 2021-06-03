import { defineComponent } from 'vue';
import WGrid from '@/components/layout/Grid';

export default defineComponent({
	name: 'demo-row',
	components: {
		WGrid,
	},
	setup(props, { slots }) {
		return () => (
			<w-grid gapY="4">
				<w-grid gapY="3">
                 
					<div class="pb-4">{slots.title?.()}</div>
					{slots.default?.()}
				</w-grid>
			</w-grid>
        );
	},
});
