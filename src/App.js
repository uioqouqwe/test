import React, {useState} from 'react';
import './App.scss';
import LoginForm from './LoginForm';
import SideBar from './SideBar';
import Terminals from './Terminals';
import Buyers from './Buyers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [logined, setLogined] = useState(false);
  return (
    <Router>
      <div>
        {logined ? <SideBar avatarUrl={avatarUrl}/> : ''}
        {logined ? '' : <LoginForm setAvatarUrl={(url) => setAvatarUrl(url)} setLogined={setLogined}/>}
        <Route path='/terminals' component={Terminals}/>
        <Route path='/buyers' component={Buyers}/>
      </div>
    </Router>
  );
}

export default App;
