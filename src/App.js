import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import Message from './message.component/message.component';

import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )

  useEffect(() => {
    // run code here
    // if its blank inside [], this code runs ONECE when the app component loads
    setUsername(prompt('Please enter your name'));
  }, []) //condition

  const sendMessage = (event) => {
    event.preventDefault(); // from refresh the page, we don't want it to be refrash, so add this
    // all the logic to send message goes
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([
      ...messages, {username: username, message: input}
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
          
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary"  type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        
        </FormControl>
      </form>
      <FlipMove className="App__messages">
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
