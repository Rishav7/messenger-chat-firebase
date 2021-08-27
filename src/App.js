import './App.css'
import React, { useState, useEffect } from 'react'
import { Button, Input, FormControl, InputLabel } from '@material-ui/core'

import Message from './Message'
import db from './firebase.js'

function App() {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const [username, setUsername] = useState('')

	const sendMessage = (event) => {
		event.preventDefault()
		setMessages([...messages, { username: username, text: input }])
		setInput('')
	}
	//useState: variable in react component
	//useEffect:block of code that run on some condition

	useEffect(() => {
		db.collection('messages').onSnapshot((snapshot) => {
			setMessages(snapshot.docs.map((doc) => doc.data()))
		})
	}, [])

	useEffect(() => {
		setUsername(prompt('enter your name'))
	}, [])
	return (
		<div className='App'>
			<h1>Messenger</h1>
			<h2>Hello :{username}</h2>

			<FormControl>
				<InputLabel htmlFor='my-input'>Enter your message</InputLabel>
				<Input
					type='text'
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>

				<Button
					variant='contained'
					color='primary'
					disabled={!input}
					type='submit'
					onClick={sendMessage}
				>
					send
				</Button>
			</FormControl>

			{messages.map((message) => (
				<Message username={username} message={message} />
			))}
		</div>
	)
}

export default App
