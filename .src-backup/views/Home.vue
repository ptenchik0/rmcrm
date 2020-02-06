<template>
	<AppContent>
		<hr>
		<Actions>
			<ActionButton icon="icon-delete" @click="alert('Delete')">
				Delete
			</ActionButton>
			<ActionButton icon="icon-delete" :close-after-click="true" @click="alert('Delete and close menu')">
				Delete and close
			</ActionButton>
			<ActionButton icon="icon-delete" :disabled="true" @click="alert('Disabled')">
				Disabled button
			</ActionButton>
			<ActionCheckbox @change="getlist_charge('(un)checked !')">
				First choice
			</ActionCheckbox>
		</Actions>
		<hr>
    <button @click="show = !show">
      Toggle sidebar
    </button>

		<table style="width: 100%" class="table table-striped list-container">
			<thead class="thead-dark">
				<tr>
					<th style="width: 5%">
						ID
					</th>
					<th colspan="2">
						Title
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>836</td>
					<td>Super Mega Title</td>
					<td>
						<Actions>
							<ActionButton icon="icon-edit" @click="alert('Edit')">
								Edit
							</ActionButton>
							<ActionButton icon="icon-delete" @click="alert('Delete')">
								Delete
							</ActionButton>
							<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
						</Actions>
					</td>
					<td>
						<Avatar user="janedoe" display-name="Jane Doe" />
					</td>
				</tr>
				<tr>
					<td>456</td>
					<td>Super Mega Title</td>
					<td>
						<Actions>
							<ActionButton icon="icon-edit" @click="alert('Edit')">
								Edit
							</ActionButton>
							<ActionButton icon="icon-delete" @click="alert('Delete')">
								Delete
							</ActionButton>
							<ActionLink icon="icon-external" title="Link" href="https://nextcloud.com" />
						</Actions>
					</td>
				</tr>
			</tbody>
		</table>
		<p>
			Some text before
			<UserBubble :user="'admin'" :display-name="'Admin Example'" :url="'/test'">
				@admin@foreign-host.com
			</UserBubble>
			and after the bubble. <UserBubble :avatar-image="'icon-group'" :display-name="'test group xy'" :primary="true">
				Hey there!
			</UserBubble>
		</p>

		<div id="app-content-wrapper">
			<div class="home">
				<HelloWorld msg="Welcome to Your Vue.js App" />
			</div>
		</div>
	</AppContent>
</template>

<script>

import { AppContent } from '@nextcloud/vue/dist/Components/AppContent'
import { Avatar } from '@nextcloud/vue/dist/Components/Avatar'
import { Actions } from '@nextcloud/vue/dist/Components/Actions'
import { ActionButton } from '@nextcloud/vue/dist/Components/ActionButton'
import { ActionCheckbox } from '@nextcloud/vue/dist/Components/ActionCheckbox'
import { UserBubble } from '@nextcloud/vue/dist/Components/UserBubble'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		AppContent,
		UserBubble,
		Avatar,
		Actions,
		ActionButton,
		ActionCheckbox,
	},
	methods: {
		getlist_charge: function(div) {
		  // this.loading = !this.loading
			alert(div)
		},
	},
}
</script>

<style>
  #app-content-wrapper {
    padding: 44px 3em 2em 3em;
  }
</style>
