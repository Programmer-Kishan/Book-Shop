import { useState, useContext } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import BookList from './Components/BookList/BookList';
import AuthContext from './store/auth-context';
import { BookContextProvider } from './store/book-context';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <BookContextProvider>
      <div className="dark-scheme fonts">
        {/* <Navbar isLogin={isLoggedIn} greetName={name} onLogout={handleLogout} /> */}
        <Navbar />
        {!ctx.isLoggedIn ? <Login /> : <BookList />}
      </div>
    </BookContextProvider>
  );
}

export default App;
