import { useState, useEffect } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    const loginName = localStorage.getItem('fname');
    if (loginInfo) {
      setIsLoggedIn(true);
      setName(loginName);
    }
  }, []);

  const handleLogin = (fnameValidity, lnameValidity, emailValidity) => {
    if (fnameValidity && lnameValidity && emailValidity) {
      console.log("In App.js");
      localStorage.setItem('isLoggedIn', "1");
      localStorage.setItem('fname', fnameValidity)
      setIsLoggedIn(true);
    }
  }

  const nameHandler = (fname) => {
    setName(fname);
  } 

  return (
    <div className="dark-scheme fonts">
      <Navbar isLogin={isLoggedIn} greetName={name} />
      {!isLoggedIn ? <Login onLogin={handleLogin} greetNameHandler={nameHandler}/> : ''}
    </div>
  );
}

export default App;
