import { useState } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="dark-scheme fonts">
      <Navbar isLogin={isLoggedIn}/>
      <Login />
    </div>
  );
}

export default App;
