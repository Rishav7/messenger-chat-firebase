import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDImW0UgOVICic9rKJTV00qyOKfWSzyxyU',
	authDomain: 'messenger-chat-84ce0.firebaseapp.com',
	projectId: 'messenger-chat-84ce0',
	storageBucket: 'messenger-chat-84ce0.appspot.com',
	messagingSenderId: '1023808086042',
	appId: '1:1023808086042:web:ed9994f5ea25204e4a31a3',
	measurementId: 'G-J9GS0JTW8F',
})

const db = firebaseConfig.firestore()
export default db
