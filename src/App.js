//Components ( Header, Footer, CreatureList etc needs to be uppercased because it is JSX and the program likes it that way. IMPORTANT!)
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './Item';
//data that is imported is to be lower cased.
import creaturesData from './creaturesData';


import './App.css';
import React from 'react';
import CreatureSearch from './CreatureSearch';

const creatureHorns = [...new Set(creaturesData.map(c => c.horns))];



class App extends Component {
  state = {
    creatures: creaturesData
  }

  handleSearch = ({ nameFilter, sortField, hornsFilter }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creaturesData
      .filter(creature => {
        return creature.title.match(nameRegex);

      })
      .filter(creature => {
        return !hornsFilter || creature.horns === hornsFilter;

      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });

  }

  render() {

    const { creatures } = this.state;
    return (
      <div className="App">
        <Header />

        <CreatureSearch horns={creatureHorns} onSearch={this.handleSearch} />

        <main>


          <CreatureList creatures={creatures} />


        </main>

        <Footer />
        
      </div>
    );
  }

}

export default App;
