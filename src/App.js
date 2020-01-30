import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Post from './post';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/:postid" component={Post} />

    </BrowserRouter>
  )

}

export default App;
