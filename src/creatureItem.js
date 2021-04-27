import React, { Component } from 'react';
import './CreatureItem.css';

export default class CreatureItem extends Component {

  render() {

    const creature = this.props.creature;

    return (
      //you can do the style at the end. do the classname on parent LI

      <li>
        <div>
          <h2>Name:</h2>
          {creature.title}
        </div>
        <div>
          <h2>Decription:</h2>
          {creature.decription}
        </div>
        <div>
          <h2>Keyword:</h2>
          {creature.keyword}
        </div>
        <div>
          <h2>Horns:</h2>
          {creature.horns}
        </div>
        <img src={creature.url} alt={creature.title} />
      </li>


    );
  }
}





