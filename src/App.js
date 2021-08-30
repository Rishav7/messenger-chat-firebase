import './App.css'
import React, { useState, useEffect } from 'react'
import { Input, FormControl, InputLabel, IconButton } from '@material-ui/core'
import FlipMove from 'react-flip-move'
import Message from './Message'
import db from './firebase.js'
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send'

//useState: variable in react component
//useEffect:block of code that run on some condition
function App() {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const [username, setUsername] = useState('')

	useEffect(() => {
		setUsername(prompt('enter your name'))
	}, [])

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				)
			})
	}, [])
	const sendMessage = (event) => {
		event.preventDefault()
		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})

		//setMessages([...messages, { username: username, message: input }])
		setInput('')
	}

	return (
		<div className='App'>
			<h1>Messenger</h1>
			<img
				src='https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk'
				alt=''
			/>
			<h2>Hello {username}</h2>
			<form className='app__form'>
				<FormControl className='app_formControl'>
					<InputLabel htmlFor='my-input'>Enter your message</InputLabel>
					<Input
						className='app__input'
						type='text'
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<IconButton
						className='app__iconButton'
						variant='contained'
						color='primary'
						disabled={!input}
						type='submit'
						onClick={sendMessage}
					>
						<SendIcon></SendIcon>
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	)
}

export default App
