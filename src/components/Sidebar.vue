<template>
	<AppSidebar v-show="show"
		title="christmas-image-2018-12-25-00:01:12.jpg"
		title-placeholder="New item"
		:subtitle="createDate"
		:actions="menu"
		active="details"
		:background="url"

		:title-editable="tedit"
		:starred="true"
		:star-loading="false"
		@input-title="titleInput"
		@submit-title="tedit=false"
		@dismiss-editing="fedit"
		@close="show=false">
		<template #primary-actions>
			<div style="display: none">
				<!--<ActionInput value="This is an input" icon="icon-files-dark" />-->
				<button class="primary">
					Button 1
				</button>
				<input id="link-checkbox"
					name="link-checkbox"
					class="checkbox link-checkbox"
					type="checkbox">
				<label for="link-checkbox" class="link-checkbox-label primary">Do something</label>
				<input id="link-radio"
					name="link-radio"
					class="radio primary"
					type="radio">
				<label for="link-radio" class="link-checkbox-label">Check radio bnt</label>
				<input class="" type="file">
			</div>
		</template>
		<AppSidebarTab name="Details" icon="icon-details" :order="0">
			<div class="row">
				<div class="col">
					<div class="form-group">
						<Multiselect v-model="value"
							:options="formatedOptions"
							label="displayName"
							track-by="user"

							:user-select="true"
							:loading="loading"
							style="width: 100%"
							@change="showData" />
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<input type="number" placeholder="Amount">
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<div class="form-group">
						<select v-model="material">
							<option disabled value="">
								Тип работ
							</option>
							<option v-for="(item, index) in list" :value="index">
								{{ index }}
							</option>
						</select>
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<select v-if="material !== ''" v-model="materialtype">
							<option disabled value="">
								Материал
							</option>
							<option v-for="option in list[material]" :value="option.value">
								{{ option.title }}
							</option>
						</select>
					</div>
				</div>
			</div>

			<fieldset>
				<legend>Размеры изделия:</legend>
				<div class="row">
					<div class="col">
						<div class="form-group">
							<label for="width">Горизонталь в мм</label>
							<input id="width" type="number" placeholder="Размер по горизонтали">
						</div>
					</div>
					<div class="col">
						<div class="form-group">
							<label for="height">Вертикаль в мм</label>
							<input id="height" type="number" placeholder="Размер по вертикали">
						</div>
					</div>
				</div>
			</fieldset>

			<fieldset>
				<legend>Допы:</legend>
				<ul style="columns: 2">
					<li>
						<input id="provarka-checkbox"
							name="provarka-checkbox"
							class="checkbox provarka-checkbox"
							type="checkbox">
						<label for="provarka-checkbox" class="provarka-checkbox-label">Provarka</label>
					</li>
					<li>
						<input id="laminacia-checkbox"
							name="laminacia-checkbox"
							class="checkbox laminacia"
							type="checkbox">
						<label for="laminacia-checkbox" class="laminacia">Laminacia</label>
					</li>
					<li>
						<input id="porezka-checkbox"
							name="porezka-checkbox"
							class="checkbox porezka-checkbox"
							type="checkbox">
						<label for="porezka-checkbox" class="provarka-checkbox-label">Porezka</label>
					</li>
					<li>
						<input id="obrezka-checkbox"
							name="obrezka-checkbox"
							class="checkbox obrezka-checkbox"
							type="checkbox">
						<label for="obrezka-checkbox" class="provarka-checkbox-label">Obrezka</label>
					</li>
					<li>
						<input
							id="lyvers-checkbox"
							v-model="luvers"
							name="lyvers-checkbox"
							class="checkbox lyvers"
							type="checkbox">
						<label for="lyvers-checkbox" class="lyvers-checkbox-label">Lyvers</label>
						<br>
						<div v-if="luvers" class="form-group">
							<input type="text" placeholder="Люверсы через ... мм">
						</div>
					</li>
				</ul>
			</fieldset>

			<fieldset>
				<legend>Оплата:</legend>
				<div class="row">
					<div class="col">
						<select>
							<option disabled selected>
								Вид оплаты
							</option>
							<option value="nal">
								Наличка
							</option>
							<option value="bank">
								Банк
							</option>
						</select>
					</div>
					<div class="col">
						<!--<DatetimePicker
							:value="new Date()"
							type="date"
							:lang="lang"
							:inline="true" />-->
						<DatetimePicker
							:value="new Date()"
							type="date"
							:lang="lang"
							@update:value="alert('Value updated')"
							@change="alert('Date changed')" />
					</div>
				</div>
			</fieldset>

			<textarea placeholder="Описание" />

			<div class="footer" :style="{ width: wwidth + 'px'}">
				<button class="primary reactive" :class="{'btn-green': valid}" :disabled="!valid">
					<span class="" :class="{'icon-checkmark-white': valid, 'icon-password': !valid}" /> Опубликовать
				</button>
			</div>
		</AppSidebarTab>
		<AppSidebarTab name="Files" icon="icon-files-dark" :order="1">
			<fieldset>
				<legend>Эскиз</legend>
				<button type="button" @click="pickImage">
					Добавить файлы
				</button>
			</fieldset>
			<fieldset>
				<legend>Рабочие файлы</legend>
				<button type="button" @click="pickImage">
					Добавить файлы
				</button>
			</fieldset>
		</AppSidebarTab>
		<!--<AppSidebarTab name="Comments" icon="icon-comment" :order="2">
			<form>
				<input id="input-folder"
					icon="icon-files-dark"
					type="text"
					value="New folder">
				<input type="submit" value=" " class="icon-confirm">
			</form>
			<hr>
			<Actions>
				<ActionInput value="This is an input" icon="icon-files-dark" />
			</Actions>
			<ActionInput value="This is an input" icon="icon-files-dark" />
		</AppSidebarTab>-->
	</AppSidebar>
</template>

<script>
import {
	AppSidebar,
	AppSidebarTab,
	Actions,
	Multiselect,
	ActionInput,
	DatetimePicker,
} from '@nextcloud/vue'

import { generateUrl } from 'nextcloud-router'

export default {
	name: 'Sidebar',
	components: {
		Actions,
		ActionInput,

		AppSidebar,
		AppSidebarTab,
		Multiselect,
		DatetimePicker,
	},
	props: {
		show: Boolean,
	},
	data() {
		return {
			date: new Date(),

			tedit: false,

			valid: true,

			_status: 'Draft',

			luvers: null,

			url: null,

			value: null,
			loading: false,
			options: ['admin', 'user1', 'user2', 'guest', 'group1'],
			type: ['Banner', 'plenka', 'Bymaga'],

			material: '',
			materialtype: '',
			list: {
				Banner: [{ value: 'litoj', title: 'Литой' }, { value: 'perfo', title: 'Перфо' }],
				Plenka: [{ value: 'glance', title: 'Глянцевая' }, { value: 'mat', title: 'Матовая' }, { value: 'perfo', title: 'Перфопленка' }],
				Bumaga: [{ value: 'blubeck', title: 'Блюбек' }, { value: 'city', title: 'Ситибумага' }],
			},

			lang: {
				formatLocale: {
					// MMMM
					months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
					// MMM
					monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					// dddd
					weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
					// ddd
					weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					// dd
					weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
					// first day of week
					firstDayOfWeek: 1,
					// first week contains January 1st.
					firstWeekContainsDate: 1,
				},
				monthBeforeYear: false,
			},
			wwidth: null,

			test: null,
		}
	},
	computed: {
		createDate() {
			const options = {
				weekday: 'long',
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				hour12: false,
			}
			return 'Created: ' + this.date.toLocaleDateString('ru-RU', options)
		},
		formatedOptions() {
			return this.options.map(item => {
				return {
					user: item,
					displayName: item,
					// desc: `This is the ${item.startsWith('group') ? 'group' : 'user'} ${item}`,
					icon: item.startsWith('group') ? 'icon-group' : 'icon-user',
					isNoUser: item.startsWith('group'),
				}
			})
		},
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
	mounted() {
		const vm = this
		const el = document.querySelector('.app-sidebar-header__desc')
		el.addEventListener('click', function() { vm.tedit = true; console.log('title clicked') })
		// document.querySelector('.app-sidebar-header__desc > a').classList.toggle('MyClass')
		// document.querySelector('.app-sidebar-header__desc > a').className = 'MyClass'

		vm.wwidth = el.offsetWidth + 0
		console.log(this.$store.state.whoIs)
	},
	methods: {
		pickImage() {
			const vm = this
			OC.dialogs.filepicker(
				'Path to your Recipe Image',
				function(path) {
					vm.url = generateUrl('/core/preview?fileId=7&x=1680&y=1050&a=true')
					console.log(path)
					// console.log(url)
					// $('input[name="image"]').val(path)
				},
				false,
				['image/jpeg', 'image/png'],
				true,
				OC.dialogs.FILEPICKER_TYPE_CHOOSE
			)
		},
		showData: function() {
			console.log(this.value)
		},
		titleInput: function() {
			console.log('Title input event')
		},
		fedit: function() {
			console.log('dismiss-editing event')
		},
	},
}
</script>

<style lang="scss" scoped>
	.app-sidebar-header__figure{
		padding-top: 18px;
	}

	.row{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: stretch;
		align-content: stretch;
	}

	.col{
		width: calc(50% - 15px);
		margin-right: 15px;
		&:last-child{
			width: 50%;
			margin-right: 0;
		}
		input, select{
			width: 100%;
		}
	}

</style>
