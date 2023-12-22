import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './scss/app.scss'
import Cart from './pages/Cart';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,Route,
} from "react-router-dom";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  
  
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='&' element={<Cart/>}/>
            </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
