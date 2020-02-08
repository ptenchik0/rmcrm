<template>
	<AppContent>
		<table id="taskstable" class="table table-striped">
			<thead class="thead-dark">
				<tr>
					<th style="width: 5%; text-align: center">
						ID
					</th>
					<th colspan="4">
						Title
					</th>
				</tr>
			</thead>
			<tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td style="text-align: right">{{task.id + 100}} <span :class="!task.completed ? task.status : 'completed'">{{task.status}}</span></td>
        <td>{{task.completed}} {{task.title}}</td>
        <td></td>
        <td></td>
        <td>{{task.completed ? 'cd '+ task.createDate : 'ud '+ task.publishDate}}</td>
      </tr>
				<tr>
					<td>836</td>
					<td v-if="!owner" style="width: 5%">
						<Avatar user="janedoe" display-name="Jane Doe" />
					</td>
					<td><a href="#">Super Mega Title aaaaa</a></td>
					<td>
						<Actions default-icon="icon-rm" :force-menu="true">
							<ActionButton icon="icon-edit" @click="alert('Edit')">
								Edit
							</ActionButton>
							<ActionButton icon="icon-delete" @click="alert('Delete')">
								Delete
							</ActionButton>
						</Actions>
					</td>
					<td>
						<Actions>
							<ActionRadio name="uniqueId" @change="alert('(un)checked !')">
								Draft
							</ActionRadio>
							<ActionRadio value="second" name="uniqueId" @change="alert('(un)checked !')">
								Active
							</ActionRadio>
							<ActionRadio :checked="true" name="uniqueId" @change="alert('(un)checked !')">
								Trush
							</ActionRadio>
							<ActionRadio :disabled="true" name="uniqueId" @change="alert('(un)checked !')">
								Done
							</ActionRadio>
						</Actions>
						<!-- completed: true | false -->
						<!-- status: active | trash | draft -->
					</td>
					<td class="end-date">
						05.07.2020
					</td>
				</tr>
				<!--<tr>
          <td>836</td>
          <td style="width: 5%">
            <Avatar user="natasha" display-name="Natasha Luch" />
          </td>
          <td><a href="#">Pechat borda dly BMW</a></td>
          <td>
            <Actions defaultIcon="icon-settings-dark" :forceMenu="true">
              <ActionButton icon="icon-edit" @click="alert('Edit')">
                Edit
              </ActionButton>
              <ActionButton icon="icon-delete" @click="alert('Delete')">
                Delete
              </ActionButton>
            </Actions>
          </td>
          <td>
            <Actions>
              <ActionRadio @change="alert('(un)checked !')" name="uniqueId">First choice</ActionRadio>
              <ActionRadio value="second" name="uniqueId" @change="alert('(un)checked !')">Second choice</ActionRadio>
              <ActionRadio :checked="true" name="uniqueId" @change="alert('(un)checked !')">Third choice (checked)</ActionRadio>
              <ActionRadio :disabled="true" name="uniqueId" @change="alert('(un)checked !')">Second choice (disabled)</ActionRadio>
            </Actions>
          </td>
          <td class="end-date">
            12.06.2020
          </td>
        </tr>-->
				<!--<tr>
          <td>836</td>
          <td>
            <Avatar user="karina" display-name="Karina Tar" />
          </td>
          <td><a href="#">Pechat na plenke</a></td>
          <td style="width: 5%">
            <Actions defaultIcon="icon-settings-dark" :forceMenu="true">
              <ActionButton icon="icon-edit" @click="alert('Edit')">
                Edit
              </ActionButton>
              <ActionButton icon="icon-delete" @click="alert('Delete')">
                Delete
              </ActionButton>
            </Actions>
          </td>
          <td>
            <Actions defaultIcon="icon-favorite">
              <ActionRadio @change="alert('(un)checked !')" name="uniqueId">Active</ActionRadio>
              <ActionRadio value="second" name="uniqueId" @change="alert('(un)checked !')">Done</ActionRadio>
              <ActionRadio :checked="true" name="uniqueId" @change="alert('(un)checked !')">Draft</ActionRadio>
            </Actions>
          </td>
          <td class="end-date">
            02.11.2020
          </td>
        </tr>-->
			</tbody>
		</table>
		<div id="app-content--wrapper">
			<p>
				Some text before
				<UserBubble :user="'admin'" :display-name="'Admin Example'" :url="'/test'">
					@admin@foreign-host.com
				</UserBubble>
				and after the bubble. <UserBubble :avatar-image="'icon-group'" :display-name="'test group xy'" :primary="true">
					Hey there!
				</UserBubble>
			</p>
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
import { ActionRadio } from '@nextcloud/vue/dist/Components/ActionRadio'

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		// HelloWorld,
		AppContent,
		UserBubble,
		Avatar,
		Actions,
		ActionButton,
		ActionCheckbox,
		ActionRadio,
	},
  props:{
    tasks: []
  },
	data() {
    return {
      show: null,
			owner: true,
			//tasks: null,
		}
	},
	methods: {
		getlist_charge: function(div) {
		  // this.loading = !this.loading
			alert(div)
		},
		changeStatus: function(status) {
			console.log(status)
		},
    trashTasks(){

      console.log('trashTasks')
    }
	},
}
</script>

<style lang="scss">
#app-content-wrapper {
	/*padding: 44px 3em 2em 3em;*/
}

.action-item > .icon{
	opacity: .3;
}

.end-date{
	color: var(--color-text-maxcontrast);
	width: 5%;
}

//
// Basic Bootstrap table
//

$spacer: 30px;
$table-color: var(--color-main-text);
$table-bg: #fff;
$table-cell-padding: 5px 15px;
$table-border-width: 1px;
$table-border-color: var(--color-border);
$table-cell-padding-sm: '';
$table-striped-order: odd;
$table-accent-bg: '';
$table-hover-color: '';
$table-hover-bg: var(--color-border);
$infix: '';

.table {
	width: 100%;
	margin-bottom: $spacer;
	color: $table-color;
	background-color: $table-bg; // Reset for nesting within parents with `background-color`.

	th,
	td {
		padding: $table-cell-padding;
		vertical-align: middle;
		border-top: $table-border-width solid $table-border-color;
	}

	thead th {
		color: var(--color-text-maxcontrast);
		vertical-align: middle;
		//border-bottom: (2 * $table-border-width) solid $table-border-color;
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

/*.table-hover {
    tbody tr {
      @include hover() {
        color: $table-hover-color;
        background-color: $table-hover-bg;
      }
    }
  }*/

// Table backgrounds
//
// Exact selectors below required to override `.table-striped` and prevent
// inheritance to nested tables.

/*@each $color, $value in $theme-colors {
    @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));
  }*/

//@include table-row-variant(active, $table-active-bg);

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

// Responsive tables
//
// Generate series of `.table-responsive-*` classes for configuring the screen
// size of where your table will overflow.

/*  .table-responsive {
    @each $breakpoint in map-keys($grid-breakpoints) {
      $next: breakpoint-next($breakpoint, $grid-breakpoints);
      $infix: breakpoint-infix($next, $grid-breakpoints);

      &#{$infix} {
        @include media-breakpoint-down($breakpoint) {
          display: block;
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;

          // Prevent double border on horizontal scroll due to use of `display: block;`
          > .table-bordered {
            border: 0;
          }
        }
      }
    }
  }*/

/*------------------*/
/*
  #taskstable {
    position: relative;
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    // hide table if emptycontent is not hidden
    #emptycontent:not(.hidden) ~ & {
      display: none;
    }
    // floating header
    thead {
      position: -webkit-sticky;
      position: sticky;
      //@include position('sticky');
      // header + breadcrumbs
      top: 44px;
      // under breadcrumbs, over file list
      z-index: 60;
      display: block;
      background-color: var(--color-main-background-translucent);
    }
  }

  #taskstable tbody tr {
    transition: background-color 0.3s ease;
    height: 51px;
  }
  #taskstable tbody tr:hover,
  #taskstable tbody tr:focus,
  #taskstable tbody .name:focus,
  #taskstable tbody tr:active,
  #taskstable tbody tr.highlighted,
  #taskstable tbody tr.highlighted .name:focus,
  #taskstable tbody tr.selected,
  #taskstable tbody tr.searchresult,
  #taskstable tbody tr:hover .filename form,
  table tr.mouseOver td {
    transition: background-color 0.3s ease;
    background-color: var(--color-background-dark);
  }
  tbody a { color: var(--color-main-text); }

  table th,
  table td {
    border-bottom: 1px solid var(--color-border);
    text-align: left;
    font-weight: normal;
  }
  table td {
    padding: 0 15px;
    font-style: normal;
    background-position: 8px center;
    background-repeat: no-repeat;
  }
  table th#headerName {
    position: relative;
    width: 9999px; !* not really sure why this works better than 100% … table styling *!
    padding: 0;
  }*/

</style>
