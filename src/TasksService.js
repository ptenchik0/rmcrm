import axios from '@nextcloud/axios'
import AppGlobal from './mixins/AppGlobal'
import store from './store/index'

export default {
	t: AppGlobal.methods.t,

	url(url) {
		url = `/apps/notes${url}`
		return OC.generateUrl(url)
	},
  sdddd(){

  },

	fetchNotes() {
		return function() {
			const t = {
				0: {
					id: 1,
					user: 'karina',
					title: 'Some awsome title',
					description: '',
					client: { uid: 'gluhoman', name: 'Gluhoman' },
					amount: 2,

					width: 5000,
					height: 2500,

					type: 'Banner',
					material: 'perfobanner',

					provarka: true,
					laminaciya: false,
					porezka: false,
					obrezka: true,
					lyvers: false,
					luversSpace: 50,

					paymant: 'Bank',
					paymentDate: '16.02.2020',

					filePrev: [],
					fileWork: [],
					fileFeedback: [],

					status: 'draft',
					completed: false,

					createDate: '15.02.2020',
					publishDate: '15.02.2020',
					endDate: '20.02.2020',
					completDate: '20.02.2020',
				},
			}

		}
	},

}
