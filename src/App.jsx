import React from 'react'
import ContextProvider from './Day-Night-Theme-Context/ContextProvider';
import MovieProvider from './DynamicContext/MovieProvider';
import MovieList from './DynamicContext/MovieList';
import './App.css'

const App = () => {
  return (
    <div>
       <h1 style={{background:"orange"}}>DYNAMIC CONTEXT </h1>
      <MovieProvider>
        <MovieList/>
      </MovieProvider>

      <h1 style={{background:"orange"}}>THEME CHANGER. </h1>
      <ContextProvider/>
      <br/>
      <br/>
      <br/>
    



    </div>
  )
}

export default App