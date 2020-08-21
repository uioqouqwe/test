import React, {useState} from 'react';
import './App.scss';
import LoginForm from './LoginForm';
import SideBar from './SideBar';
import Terminals from './Terminals';
import Buyers from './Buyers';
import Buyer from './Buyer';
import NoMatchPage from './NoMatchPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [logined, setLogined] = useState(false);
  return (
    <Router>
      <div>
        {logined ? <SideBar avatarUrl={avatarUrl}/> : ''}
        <Switch>
          <Route path='/' exact render={() => logined ? '' : <LoginForm setAvatarUrl={(url) => setAvatarUrl(url)} setLogined={setLogined}/>}/>
          <Route path='/terminals' component={Terminals}/>
          <Route path='/buyers' component={Buyers} exact/>
          <Route path='/buyers/:id' render={({match}) => <Buyer buyerId = {match.params.id}/>}/>
          <Route component={NoMatchPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
