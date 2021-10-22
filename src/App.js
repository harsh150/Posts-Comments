import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from "react";
import Header from './components/Header'
import Posts from './components/Posts'
import PostDetail from './components/PostDetail';

function App() {
  return (


    <Router>
      <div className="App">
        <Header/>
        <Route 
          path='/' 
          exact
          component={Posts}
        />
        <Route path='/post/:id' component={PostDetail}/>
      </div>
    </Router>
  );
}


export default App;
