import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './screens/Register';
// import Login from './screens/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Navbar/>
        {/* { <BrowserRouter>
        <Route path='/register' exact component={Register}/>
        <Route path='/login' exact component={Login}/>
        </BrowserRouter> } */}
      </div>
      
    </>
  )
}

export default App
