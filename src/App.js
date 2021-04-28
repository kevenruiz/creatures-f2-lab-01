//Components ( Header, Footer, CreatureList etc needs to be uppercased because it is JSX and the program likes it that way. IMPORTANT!)
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
//data that is imported is to be lower cased.
import creatures from './Creatures';


import './App.css';
import React from 'react';
import CreatureSearch from './CreatureSearch';

class App extends Component {

  handleSearch = (search) => {
    console.log(search);
  }
  render() {

    return (
      <div className="App">
        <Header />

        <main>
          <CreatureSearch onSearch={this.handleSearch} />
          <CreatureList creature={creatures} />


        </main>

        <Footer />
        
      </div>
    );
  }

}

export default App;
