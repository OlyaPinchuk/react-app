import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from "./components/welcome";
import Pets from "./components/pets"
import {BrowserRouter, Route, Routes, Router, Navigate, useNavigate} from "react-router-dom";
import Test from "./components/test";
import PetDetailed from './components/pet/petDetailed'
import {Button} from "@mui/material";
import './App.css'
import Login from "./components/login/login";
import {useSelector, useDispatch} from "react-redux";
// import {showStateButton} from "./redux/action-creators";


function App() {

   //  const counter = useSelector(state => {
   //      console.log(state)
   //      return state.counter
   //  })
   //  const dispatch = useDispatch();
   // const incrementHandler = () =>  {
   //      dispatch({type: 'increment'})
   // }
   // const decrementHandler = () =>  {
   //      dispatch({type: 'decrement'})
   // }

    const buttonState = useSelector(state => {
        console.log(state)
        return state.stateButton
    })

    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate("/login");
        console.log('log in')
    }

    const handleSignIn = () => {
        console.log('sign in')
    }


  return (
      <div className="App">
        <header className="App-header">
          <div className={'logo'}>PET STORE</div>
          <div>
              {/*<div>{counter}*/}
              {/*  <button onClick={incrementHandler}>increment</button>*/}
              {/*  <button onClick={decrementHandler}>decrement</button>*/}
              {/*  <button onClick={toggleCounter}>toggle counter</button>*/}
              {/*</div>*/}
              <div>stateButton: </div>
              <Button sx={{m: 1}} variant={"contained"} onClick={handleLogIn}>Log in</Button>
              <Button variant={"contained"} onClick={handleSignIn}>Sign in</Button>
          </div>
        </header>

        <Routes>
                <Route path='/' element={<Pets/>}></Route>
                <Route path='pets/:petID' element={<PetDetailed/>}></Route>
                <Route path='login' element={<Login/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
