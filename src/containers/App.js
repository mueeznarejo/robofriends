import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})})
  }

  onInputChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ?
    <h1 className="heading tc">Loading...</h1> :
    <div className='tc'>
      <h1 className="heading">RoboFriends</h1>
      <SearchField searchChange={this.onInputChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  }
}

export default App;
