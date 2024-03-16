import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm'
import Register from './Components/Register/Register';

const App = () => {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <LoginForm />
      {/* <Register /> */}
    </div>
  );
}

export default App;
