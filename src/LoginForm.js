import React, {useState} from 'react';
import './LoginForm.scss';
import _ from 'underscore';

function LoginForm({setAvatarUrl, setLogined}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginIsValid, setLoginIsValid] = useState(false);
  const [passIsValid, setPassIsValid] = useState(false);

  const getGithubAvatar = async (username) => {
    let user = await fetch(`https://api.github.com/users/${username}`);
    if (user.ok) {
      user = await user.json();
      return {
        hasUser: true,
        avatarUrl: user.avatar_url
      };
    }
    else {
      return {
        hasUser: false
      };
    }
  };

  const debounceGetGithubAvatar = _.throttle(getGithubAvatar, 500, { trailing: true });

  const loginFormHandler = (e) => {
    e.preventDefault();
    getGithubAvatar(login).then(res => {
      setAvatarUrl(res.avatarUrl);
      setLogined(true);
    });
  };

  const loginHandler = (e) => {
    const username = e.target.value;
    setLogin(username);
    debounceGetGithubAvatar(username).then(res => {
      if (res.hasUser) setLoginIsValid(true);
      else setLoginIsValid(false);
    });
  };
  
  const passwordHandler = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    if (pass.search(/[A-Z,А-Я]/g) !== -1 && pass.search(/[0-9]/g) !== -1) {
      setPassIsValid(true);
    }
    else {
      setPassIsValid(false);
    }
  };

  return (
    <form className='login-form' onSubmit={loginFormHandler}>
        <label htmlFor='login'>Login</label>
        <input type='text' id='login' value={login} onChange={loginHandler} className={loginIsValid? '' : 'invalid'}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={passwordHandler} className={passIsValid? '' : 'invalid'}/>
        <input type='submit' value='Войти' disabled={!loginIsValid || !passIsValid}/>
    </form>
  );
}
export default LoginForm;