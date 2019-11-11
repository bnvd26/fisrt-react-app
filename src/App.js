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
  }
}

class App extends Component {

  state = {
    famille,
    isDescriptionShow: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isDescriptionShow = !this.state.isDescriptionShow
    this.setState({isDescriptionShow})
  }

  hideName = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  render(){
    const { title } = this.props
    const { famille, isDescriptionShow } = this.state

    let description = null
    if(isDescriptionShow) {
      description = <p>Il y a une props children</p>
    }

    const liste = Object.keys(famille) // creer un tableau a partir des cles de l'objet ici famille par exemple
        .map(membre => (                // map permet de boucler autour du tableau
          <Membre
            handleChange={event => this.handleChange(event, membre)}
            hideName={() => { this.hideName(membre)}}
            key={membre}
            age={famille[membre].age}
            name={famille[membre].nom} />
        ))

    return (
      <div className="App">
        <input type="text"/>
        <h1>{title}</h1>
        {liste}
        <Membre 
          age={famille.membre1.age}
          name={famille.membre1.nom} >
            { description }
          </Membre>
        <Membre 
          age={famille.membre2.age}
          name={famille.membre2.nom} />
        <Membre 
          age={famille.membre3.age}
          name={famille.membre3.nom}>
            {
            isDescriptionShow ?
            <strong>Je suis un rappeur US</strong>
            :
            null
            }
          <button onClick={this.handleShowDescription}>
            {
              isDescriptionShow ?
              'Hide' : 'Show' 
            }
          </button>
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
