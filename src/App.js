import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './components/Checkout';
import {auth} from '../src/firebase/config.js'
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise= loadStripe('pk_test_51HOq4pHXxf9xLQSuP4TCLlZAPLk7SZLYrfXljHXGWNZQ63hxvXGTNSCeQFCvNCeFfmLpkWFYpIe58sG4VRNeoYfB00EbT74e8d')


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser)
      {
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
  <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
  <Header/>
    <Home/>
    </Route>
    <Route  path="/login">
    <Login/>
    </Route>
    <Route path="/checkout">
    <Header/>
      <Checkout/>
    </Route>
    <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
    </Route>
  </Switch>
</div>
</Router>
);
}

export default App;
