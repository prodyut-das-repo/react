import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message';
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="container">
      <EventBind/>
      <Counter/>
      <Message/>
      <Greet name="John">
        <p>How cool is that</p>
      </Greet>
      <Greet name="Cena">
        <button>Action</button>
      </Greet>
      <Greet name="Shawn" />
      <Welcome name="Shawn" />
    </div>
  );
}

export default App
