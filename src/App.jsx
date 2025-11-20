import React from 'react'
import State from './assets/state'
import StateString from './assets/statestring'
import './App.css'

const App = () => {
  return (
    <>
      <div className="card-container">
        <State />
      </div>

      <div className="card-container">
        <StateString />
      </div>
    </>
  )
}

export default App
