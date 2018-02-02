import React from 'react';
import ReactDOM from 'react-dom';
import GuardiansContainer from './containers/GuardiansContainer.js';
import NavBarContainer from './containers/NavBarContainer.js';
import FilertMenuContainer from './containers/FilterMenuContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ["ALL", "ALL"]
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(filter) {
    let newFilter = filter.split(" ")
    this.setState({filter: newFilter})
  }

  render() {
    return(
      <div className="innerContainer">
        <NavBarContainer />
        <div className="column left">
          <FilertMenuContainer
          handleFilter={this.handleFilter}/>
        </div>
        <div className="column right">
          <div className="welcomeQuote">
            <h1>Terra Battle 2 Databse</h1>
            <p>Welcome to Terra Battle 2 Database, the site is a work in progresss so
              please look forward to new features! Welcome to Terra Battle 2 Database, the site is a work in progresss so
              please look forward to new features!</p>
            </div>
            <GuardiansContainer
              filter={this.state.filter}
            />
          </div>
        </div>
      )
    }
  }

export default App
