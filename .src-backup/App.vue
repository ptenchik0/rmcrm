<template>
	<Content app-name="rmcrm" :content-class="{loading: loading.notes}">
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

				<AppNavigationItem title="Loading Item" :loading="true" />
				<AppNavigationItem title="Event Item" icon="icon-edit" @click="window.console.log('clicked')" />
				<AppNavigationCaption title="sssssssssssss" />
			</ul>
			<AppNavigationSettings>
				dsfas
			</AppNavigationSettings>
		</AppNavigation>

		<router-view />

    <Sidebar />


	</Content>

<!--    <Content app-name="app">
      <AppContent>
        <span>This is the content</span>
        <button @click="show = !show">
          Toggle sidebar
        </button>
      </AppContent>
    </Content>-->
</template>

<script>

import {
	Content,
	AppContent,
	AppNavigation,
	AppNavigationNew,
	AppNavigationCaption,
	AppNavigationCounter,
	AppNavigationItem,
	AppNavigationIconBullet,
	AppNavigationSettings,
	ActionButton,
  ActionInput,
  Actions,
	AppNavigationSpacer,
	AppSidebar,
	AppSidebarTab,
/*
    AppNavigation,
    AppNavigationItem,
    AppNavigationNew,
    AppNavigationSettings,
    AppSidebar,
    AppSidebarTab,
    AppNavigationCounter,
    ActionButton,
    ActionLink,
    AppNavigationIconBullet,
    ActionCheckbox,
    ActionInput,
    ActionRouter,
    ActionText,
    ActionTextEditable, */
} from '@nextcloud/vue'
import Sidebar from "./components/Sidebar";

export default {
	name: 'App',
	components: {
		Content,
    Sidebar,

		AppContent,
		AppNavigation,
		AppNavigationNew,
		AppNavigationCaption,
		AppNavigationItem,
		AppNavigationIconBullet,
		AppNavigationSettings,
		AppNavigationCounter,
		ActionButton,
		ActionInput,
		AppNavigationSpacer,
		AppSidebar,
		AppSidebarTab,
    Actions,
	},
	data() {
		return {
			loading: {
				notes: false,
				create: false,
			},
			date: Date.now() + 86400000 * 3,
			date2: Date.now() + 86400000 * 3 + Math.floor(Math.random() * 86400000 / 2),
			show: true,
			starred: false,
		}
	},
	computed: {
		// App navigation
		menu: function() {
			return [
				{
					id: 'app-category-your-apps',
					classes: [],
					href: '#1',
					// action: this.log,
					icon: 'icon-category-installed',
					text: t('settings', 'Your apps'),
				},
				{
					caption: true,
					text: t('vueexample', 'Section'),
				},
				{
					id: 'app-category-enabled',
					classes: [],
					icon: 'icon-category-enabled',
					href: '#2',
					utils: {
						actions: [{
							icon: 'icon-delete',
							text: t('settings', 'Remove group'),
							action: function() {
								alert('remove')
							},
						}],
					},
					text: t('settings', 'Active apps'),
				},
				{
					id: 'app-category-enabled',
					classes: [],
					href: '#3',
				},
				{
					id: 'app-category-disabled',
					classes: [],
					icon: 'icon-category-disabled',
					href: '#4',
					undo: true,
					text: t('settings', 'Disabled apps'),
				},
			]
		},
	},
	/* created() {
		this.$router.push({ name: 'home' })
	}, */
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//
// Basic Bootstrap table
//
$black: #000;

$spacer: 1rem !default;
$table-color: #000 !default;
$table-bg:                    null !default;
$table-cell-padding:          .75rem !default;
$table-cell-padding-sm:       .3rem !default;
$table-border-width:          1px !default;
$table-border-color:          #c4c4c4 !default;
$table-striped-order:         even !default;
$table-accent-bg:             rgba($black, .05) !default;
$table-hover-color:           $table-color !default;
$table-hover-bg:              rgba($black, .075) !default;
$table-active-bg:             $table-hover-bg !default;

.table {
  width: 100%;
  margin-bottom: $spacer;
  color: $table-color;
  background-color: $table-bg; // Reset for nesting within parents with `background-color`.

  th,
  td {
    padding: $table-cell-padding;
    vertical-align: top;
    border-top: $table-border-width solid $table-border-color;
  }

  thead th {
    vertical-align: bottom;
    border-bottom: (2 * $table-border-width) solid $table-border-color;
  }

  tbody + tbody {
    border-top: (2 * $table-border-width) solid $table-border-color;
  }
}

//
// Condensed table w/ half padding
//

.table-sm {
  th,
  td {
    padding: $table-cell-padding-sm;
  }
}

// Border versions
//
// Add or remove borders all around the table and between all the columns.

.table-bordered {
  border: $table-border-width solid $table-border-color;

  th,
  td {
    border: $table-border-width solid $table-border-color;
  }

  thead {
    th,
    td {
      border-bottom-width: 2 * $table-border-width;
    }
  }
}

.table-borderless {
  th,
  td,
  thead th,
  tbody + tbody {
    border: 0;
  }
}

// Zebra-striping
//
// Default zebra-stripe styles (alternating gray and transparent backgrounds)

.table-striped {
  tbody tr:nth-of-type(#{$table-striped-order}) {
    background-color: $table-accent-bg;
  }
}

// Hover effect
//
// Placed here since it has to come after the potential zebra striping

@mixin hover() {
  &:hover { @content; }
}

.table-hover {
  tbody tr {
    @include hover() {
      color: $table-hover-color;
      background-color: $table-hover-bg;
    }
  }
}

// Table backgrounds
//
// Exact selectors below required to override `.table-striped` and prevent
// inheritance to nested tables.

/*
@each $color, $value in $theme-colors {
  @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));
}

@include table-row-variant(active, $table-active-bg);
*/

// Dark styles
//
// Same table markup, but inverted color scheme: dark background and light text.

// stylelint-disable-next-line no-duplicate-selectors
/*.table {
  .thead-dark {
    th {
      color: $table-dark-color;
      background-color: $table-dark-bg;
      border-color: $table-dark-border-color;
    }
  }

  .thead-light {
    th {
      color: $table-head-color;
      background-color: $table-head-bg;
      border-color: $table-border-color;
    }
  }
}*/

/*.table-dark {
  color: $table-dark-color;
  background-color: $table-dark-bg;

  th,
  td,
  thead th {
    border-color: $table-dark-border-color;
  }

  &.table-bordered {
    border: 0;
  }

  &.table-striped {
    tbody tr:nth-of-type(#{$table-striped-order}) {
      background-color: $table-dark-accent-bg;
    }
  }

  &.table-hover {
    tbody tr {
      @include hover() {
        color: $table-dark-hover-color;
        background-color: $table-dark-hover-bg;
      }
    }
  }
}*/

</style>
