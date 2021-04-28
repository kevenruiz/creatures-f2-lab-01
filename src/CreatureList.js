import React, { Component } from 'react';
import CreatureItem from './Item';

import './CreatureList.css';

export default class CreatureList extends Component {
  render() {
    const creatures = this.props.creatures;

    return (

      <ul className="CreatureList">
        {
          creatures.map(creature => (
            <CreatureItem creature={creature} key={creature.title} />
          ))
        }
      </ul>

    );
  }
}
