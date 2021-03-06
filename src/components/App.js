import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { isFetch } from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.isFetch();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.name.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.charsReducer.name,
    fetching: state.charsReducer.fetching
  };
};
export default connect(
  mapStateToProps,
  { isFetch }
)(App);
