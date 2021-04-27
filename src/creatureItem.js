import React, { Component } from 'react';
import './CreatureItem.css';

export default class CreatureItem extends Component {

  render() {

    const creature = this.props.creature;

    return (
      //you can do the style at the end. do the classname on parent LI

      <li>
        <div>
          <h3>Name:</h3>
          {creature.title}
        </div>
        <div>
          {creature.decription}
        </div>
        <div>
          {creature.keyword}
        </div>
        <div>
          {creature.horns}
        </div>
        <img src={creature.url} alt={creature.title} />
      </li>


    );
  }
}


