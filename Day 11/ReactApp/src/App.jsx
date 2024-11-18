import React from 'react'
import MovieList from './MoviesList'

const App=()=>{
  return (
    <div>
      <h1 
      style={{
        backgroundColor:"black",
        color:"white",
        fontSize:"40px",
        textAlign:"center"
      }}
    >Netflix Clone</h1>
    <MovieList/>
    </div>
  )
}

export default App