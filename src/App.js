import './App.css';

import SharedLayout from './SharedLayout.js';
import Home from './Home.js';
import Questions from './Questions.js';
import Ask from './Ask.js';
import Singleqs from './Singleqs.js';
import Login from './Login.js';
import Signup from './Signup.js';
import User from './User';

// Test

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className='contAppbody'>
            <Routes>
              <Route path='https://coding-queries.netlify.app/' element={<SharedLayout />}>
                {/* <Route index element={<Home />}/> */}
                <Route index element={<Login />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='signup' element={<Signup />}></Route>
                <Route path='https://coding-queries.netlify.app/questions' element={<Questions />} />
                <Route path='ask' element={<Ask />} />
                <Route path='user/:userId' element={<User />} />
                <Route path='questions/:questionId' element={<Singleqs />}></Route>
              </Route>
            </Routes>
          </div>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
