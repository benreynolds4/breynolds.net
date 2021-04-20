import React, { Component } from 'react'

import Porfolio from './Components/Porfolio'
import Biography from './Components/Biography'
import Map from './Components/Map'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Biography />
        <Porfolio  />
        <Map />
      </React.Fragment>
      
    )
  }
}

export default App

