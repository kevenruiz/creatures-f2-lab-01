import React, { Component } from 'react';
import './CreatureItem.css';

export default class CreatureItem extends Component {

  render() {

    const creature = this.props.creature;

    return (
      //you can do the style at the end. do the classname on parent LI

      <li className='CreatureItem'>

        <h2>
          {creature.title}</h2>
        <img src={creature.url} alt={creature.title} />
        <p>{creature.description}</p>
        {creature.keyword}

      </li>


    );
  }
}





