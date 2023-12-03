import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Error from './components/Error'
import Payment from './components/Payment'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';




const promise = loadStripe("pk_test_51OJ4CHSJ7Omkeg3wrp3nQnHMhzHE9qvqOG1ZGl6i6l6HFLu5XribkfCwkBYu3CkBMQQdrDuh7IJXCcixqKGTAnbP002cGX9Qi8")


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />


          <Route exact path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
