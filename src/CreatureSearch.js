import { Component } from 'react';
import './CreatureSearch.css';

export default class CatSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    hornsFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }
  
  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ hornsFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    return (
      <form className='CreatureSearch' onSubmit={this.handleSubmit}>
        <input
          name='nameSearch'
       //   value={nameSearch}
          onChange={this.handleNameChange}

        />
        <select
          name='sortField'
       //   value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value="name">by name</option>
          <option value="horns">by horns</option>
        </select>
        <button>Search</button>
      </form>
    );
  }

}