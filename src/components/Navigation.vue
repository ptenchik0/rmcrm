<template>
	<AppNavigation :class="{loading: loading.notes, 'icon-error': 'error'}">
		<AppNavigationNew
			:text="t('rmcrm', 'New task')"
			button-id="notes_new_note"
			:button-class="['icon-add', { loading: loading.create }]" />
		<ul id="app-rmcrm-navigation">
			<AppNavigationItem icon="icon-edit" title="All tasks">
				<AppNavigationCounter slot="counter" :highlighted="true">
					99+
				</AppNavigationCounter>
			</AppNavigationItem>
			<AppNavigationItem icon="icon-error" title="Outdated tasks" class="adadd">
				<AppNavigationCounter slot="counter" :highlighted="true">
					99+
				</AppNavigationCounter>
			</AppNavigationItem>
			<AppNavigationItem icon="icon-error" title="Finished tasks">
				<AppNavigationCounter slot="counter" :highlighted="true">
					99+
				</AppNavigationCounter>
			</AppNavigationItem>

			<AppNavigationSpacer />

			<AppNavigationItem icon="icon-user" title="This is a user">
				<AppNavigationCounter slot="counter" :highlighted="true">
					99+
				</AppNavigationCounter>
				<template slot="actions">
					<ActionButton icon="icon-edit" @click="alert('Edit')">
						Edit
					</ActionButton>
					<ActionButton icon="icon-delete" @click="alert('Delete')">
						Delete
					</ActionButton>
					<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
				</template>
			</AppNavigationItem>

			<AppNavigationItem title="Entry 2" :pinned="false">
				<AppNavigationIconBullet slot="icon" color="0082c9" />
			</AppNavigationItem>
			<AppNavigationItem title="Loading Item" :loading="true" />
			<AppNavigationItem title="Event Item" icon="icon-edit" @click="window.console.log('clicked')" />
			<AppNavigationCaption title="sssssssssssss" />
		</ul>
		<AppNavigationSettings>
			dsfas
		</AppNavigationSettings>
	</AppNavigation>
</template>

<script>
import {
	AppNavigation,
	AppNavigationNew,
	AppNavigationItem,
	AppNavigationCounter,
	AppNavigationCaption,
	AppNavigationIconBullet,
	AppNavigationSpacer,
	AppNavigationSettings,

	ActionButton,
} from '@nextcloud/vue'

export default {
	name: 'Navigation',
	components: {
		AppNavigation,
		AppNavigationNew,
		AppNavigationItem,
		AppNavigationCounter,
		AppNavigationCaption,
		AppNavigationIconBullet,
		AppNavigationSpacer,
		AppNavigationSettings,

		ActionButton,
	},
	data() {
		return {
			loading: {
				notes: false,
				create: false,
			},
		}
	},
}
</script>

<style scoped>

</style>
