import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom : 'Benjamin',
    age: 23
  },
  membre2: {
    nom : 'John',
    age: 40
  },
  membre3: {
    nom : 'Kanye',
    age: 39
  },
  membre4: {
    nom : 'Travis',
    age: 9
  },
}

class App extends Component {

  state = {
    famille
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  render(){
    const { title } = this.props
    const { famille } = this.state
    return (
      <div className="App">
        <input type="text"/>
        <h1>{title}</h1>
        <Membre 
          age={famille.membre1.age}
          name={famille.membre1.nom} />
        <Membre 
          age={famille.membre2.age}
          name={famille.membre2.nom} />
        <Membre 
          age={famille.membre3.age}
          name={famille.membre3.nom}>
          <strong>Je suis un rappeur US</strong>
        </Membre>
        <Membre 
          age={famille.membre4.age}
          name={famille.membre4.nom} />
          <Button 
            vieillir={ () => this.handleClick(2) }
          />
      </div>
    )
  }
}

export default App;
