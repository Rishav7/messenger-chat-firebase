import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyCTN_CDN8SO-nSHDwMJVyD5oePpF2dIAIY',
	authDomain: 'messenger-chat-c57e7.firebaseapp.com',
	databaseURL: 'https://messenger-chat-c57e7-default-rtdb.firebaseio.com',
	projectId: 'messenger-chat-c57e7',
	storageBucket: 'messenger-chat-c57e7.appspot.com',
	messagingSenderId: '586511281062',
	appId: '1:586511281062:web:9f61656dcba7459d067d67',
	measurementId: 'G-RNWZBFSBBS',
})

const db = firebaseConfig.firestore()
export default db
