import React, {useState} from 'react';
import './App.scss';
import LoginForm from './LoginForm';
import SideBar from './SideBar';

function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
    <div>
      <SideBar avatarUrl={avatarUrl}/>
      <LoginForm setAvatarUrl={(url) => setAvatarUrl(url)}/>
    </div>
  );
}

export default App;
