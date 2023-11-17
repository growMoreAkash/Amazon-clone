import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Error from './components/Error'
import Payment from './components/Payment'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/payment" element={<Payment/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
