import { computed, defineComponent, onMounted, PropType, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AdminLayout from './layouts/AdminLayout/AdminLayout.vue';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout.vue';
export default defineComponent({
	components: {
		DefaultLayout,
		AdminLayout,
	},
	computed: {
		layout() {
			return this.$router.currentRoute.value.meta.layout || 'default-layout';
		},
	},

	render() {
		return (
            <div>
            {this.layout}
			<component is={this.layout}>
				<router-view />
			</component>
            </div>
		);
	},
});
