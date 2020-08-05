import React from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import Hills from './components/Hills'
import King from './components/King'
import Cyeed from './components/Cyeed'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <p>Click the links below for some super fun facts about Jamie's Best Friend in class Saeed Shareef</p>
      <Link to='/Hills'>Some nice things about Saeed</Link>
      <br />
      <br />
      <Link to='/king'>Look at who is handsome!</Link>
      <br />
      <br />
      <Link to='/Cyeed'>Favorite Games</Link>
      <Switch>
        <Route path='/King' component={King} />
        <Route path='/Hills' component={Hills} />
        <Route path='/Cyeed' component={Cyeed} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

