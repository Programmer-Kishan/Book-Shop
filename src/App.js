import { useContext } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Book from './Components/BookList/Book';
import AuthContext from './store/auth-context';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <div className="dark-scheme fonts">
      {/* <Navbar isLogin={isLoggedIn} greetName={name} onLogout={handleLogout} /> */}
      <Navbar />
      {!ctx.isLoggedIn ? <Login /> : <Book />}
    </div>
  );
}

export default App;
