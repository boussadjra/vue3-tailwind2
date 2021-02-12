import { defineComponent } from 'vue';

export default defineComponent({
	setup(props, { slots }) {
		return () => (
			<svg width="256px" height="221px" viewBox="0 0 256 221" version="1.1" preserveAspectRatio="xMidYMid">
				<g>
					<path
						d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
						class="text-navy-blue-500 dark:text-navy-blue-400 fill-current"
					></path>
					<path
						d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
						class="text-navy-blue-500 dark:text-navy-blue-400 fill-current"
					></path>
					<path
						d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
						fill="#23ce6b"
					></path>
				</g>
			</svg>
		);
	},
});
