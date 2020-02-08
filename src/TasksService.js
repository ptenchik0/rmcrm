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
		return [
      {
        "id": 1,
        "user": "Duke",
        "title": "consectetur deserunt exercitation ea",
        "description": "Laboris minim tempor magna est ullamco sint qui. Aliquip laboris ea adipisicing eu labore fugiat officia ex esse. Consectetur laboris est culpa commodo aliquip veniam minim amet veniam commodo. Eu ut aliquip anim reprehenderit excepteur veniam mollit labore.\r\n",
        "client": [
          {
            "uid": "admin",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "admin",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          }
        ],
        "amount": 2,
        "width": 2469,
        "height": 4192,
        "type": "plenka",
        "material": "perfobanner",
        "provarka": false,
        "laminaciya": false,
        "porezka": true,
        "obrezka": true,
        "lyvers": false,
        "luversSpace": 40,
        "paymant": "bank",
        "paymentDate": "2019-12-18 11:53:06",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "published",
        "completed": true,
        "createDate": "2019-02-18 03:13:03",
        "publishDate": "2019-09-29 12:13:33",
        "endDate": "2019-01-24 09:58:52",
        "completDate": "2019-06-01 12:11:39"
      },
      {
        "id": 11,
        "user": "Lucy",
        "title": "et deserunt excepteur incididunt",
        "description": "Aliqua mollit cillum ex elit tempor aute eu. Mollit nisi ullamco magna nostrud do ut esse nostrud officia ipsum. Nostrud officia occaecat cillum aliquip ad. Dolor elit enim ad labore cupidatat. Voluptate sunt quis ad consectetur duis elit pariatur ex laboris ea elit incididunt culpa tempor.\r\n",
        "client": [
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "user1",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          }
        ],
        "amount": 3,
        "width": 4890,
        "height": 3070,
        "type": "Banner",
        "material": "perfobanner",
        "provarka": false,
        "laminaciya": false,
        "porezka": false,
        "obrezka": true,
        "lyvers": true,
        "luversSpace": 30,
        "paymant": "bank",
        "paymentDate": "2019-08-24 04:10:12",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "trash",
        "completed": false,
        "createDate": "2019-10-28 12:21:34",
        "publishDate": "2019-07-04 09:40:58",
        "endDate": "2019-04-29 08:08:01",
        "completDate": "2019-05-01 02:45:43"
      },
      {
        "id": 21,
        "user": "Sharron",
        "title": "laboris do exercitation amet",
        "description": "Esse laboris ullamco deserunt aliquip magna dolor anim pariatur voluptate non dolore mollit irure. Nisi cillum qui tempor nisi consectetur culpa fugiat dolor proident commodo nisi magna nostrud ullamco. Officia elit ad eiusmod ad cupidatat irure tempor ullamco magna Lorem do Lorem culpa deserunt. Lorem sunt aliquip id sunt commodo do aliqua veniam voluptate magna. Laboris laborum labore laborum excepteur commodo. In irure dolor officia ea mollit.\r\n",
        "client": [
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "admin",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "admin",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          }
        ],
        "amount": 2,
        "width": 1259,
        "height": 1676,
        "type": "plenka",
        "material": "perfobanner",
        "provarka": true,
        "laminaciya": true,
        "porezka": true,
        "obrezka": false,
        "lyvers": false,
        "luversSpace": 50,
        "paymant": "nal",
        "paymentDate": "2019-08-16 01:30:48",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "draft",
        "completed": false,
        "createDate": "2019-07-12 05:13:46",
        "publishDate": "2019-10-13 10:03:08",
        "endDate": "2019-05-26 08:08:08",
        "completDate": "2019-04-13 02:18:57"
      },
      {
        "id": 31,
        "user": "Johanna",
        "title": "proident dolore elit in",
        "description": "Reprehenderit sint ad enim sit aliquip et. Velit cupidatat tempor elit sint mollit eiusmod esse. Et sunt incididunt nostrud culpa minim laboris ea ea velit esse adipisicing duis eiusmod proident. Voluptate ullamco labore eu labore minim adipisicing.\r\n",
        "client": [
          {
            "uid": "admin",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "user1",
            "name": "Gluhoman"
          },
          {
            "uid": "user1",
            "name": "Gluhoman"
          }
        ],
        "amount": 3,
        "width": 3210,
        "height": 4745,
        "type": "Bymaga",
        "material": "perfobanner",
        "provarka": true,
        "laminaciya": false,
        "porezka": true,
        "obrezka": false,
        "lyvers": true,
        "luversSpace": 30,
        "paymant": "bank",
        "paymentDate": "2019-02-10 07:58:25",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "trash",
        "completed": true,
        "createDate": "2019-11-12 09:40:33",
        "publishDate": "2019-10-07 08:19:29",
        "endDate": "2019-06-26 02:22:33",
        "completDate": "2019-07-05 12:37:21"
      },
      {
        "id": 41,
        "user": "Tucker",
        "title": "pariatur tempor aute esse",
        "description": "Reprehenderit duis aliqua exercitation Lorem Lorem. Magna laboris sunt qui voluptate proident culpa. Laborum amet voluptate veniam magna esse mollit.\r\n",
        "client": [
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          }
        ],
        "amount": 2,
        "width": 3728,
        "height": 1446,
        "type": "plenka",
        "material": "perfobanner",
        "provarka": true,
        "laminaciya": true,
        "porezka": false,
        "obrezka": false,
        "lyvers": false,
        "luversSpace": 20,
        "paymant": "bank",
        "paymentDate": "2019-12-31 09:14:58",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "draft",
        "completed": true,
        "createDate": "2020-01-24 02:21:56",
        "publishDate": "2019-05-13 05:57:26",
        "endDate": "2019-08-16 12:25:41",
        "completDate": "2019-08-07 11:32:24"
      },
      {
        "id": 51,
        "user": "Alfreda",
        "title": "sunt proident do Lorem",
        "description": "Ullamco magna ex eiusmod dolor labore esse laborum non qui aliqua aliqua dolor. Incididunt non enim sint nisi Lorem nulla tempor. Velit magna laborum sunt est tempor tempor eiusmod elit deserunt. Aliquip do aliqua dolor occaecat excepteur occaecat est. Excepteur mollit quis aute esse nostrud irure dolore mollit nostrud. Laboris aliqua duis do in magna amet. Sint magna do officia voluptate.\r\n",
        "client": [
          {
            "uid": "user1",
            "name": "Gluhoman"
          },
          {
            "uid": "group1",
            "name": "Gluhoman"
          },
          {
            "uid": "user1",
            "name": "Gluhoman"
          },
          {
            "uid": "user2",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          },
          {
            "uid": "guest",
            "name": "Gluhoman"
          }
        ],
        "amount": 2,
        "width": 3709,
        "height": 3128,
        "type": "plenka",
        "material": "perfobanner",
        "provarka": false,
        "laminaciya": true,
        "porezka": true,
        "obrezka": true,
        "lyvers": true,
        "luversSpace": 20,
        "paymant": "bank",
        "paymentDate": "2019-06-29 03:04:33",
        "filePrev": [],
        "fileWork": [],
        "fileFeedback": [],
        "status": "trash",
        "completed": false,
        "createDate": "2019-08-17 08:12:45",
        "publishDate": "2019-02-02 02:42:37",
        "endDate": "2019-09-11 08:13:40",
        "completDate": "2019-07-19 10:38:39"
      }
    ]
	},

}
