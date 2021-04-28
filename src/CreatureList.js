import React, { Component } from 'react';
import CreatureItem from './CreatureItem';

import './CreatureList.css';

export default class CreatureList extends Component {
  render() {
    const creatures = this.props.creatures;

    return (
      <div>
        <ul className="CreatureList">
          {
            creatures.map(creature => (
              <CreatureItem creature={creature} key={creature.title} />
            ))
          }
        </ul>
      </div>
    );
  }
}
