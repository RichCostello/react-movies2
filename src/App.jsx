import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import { RouteTransition } from 'react-router-transition';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
  
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 1500);
  }


  render() {
     const { loading } = this.state;
    
    if(loading) {
      return null; // render null when app is not ready
    }
    return(
   
      <div>
        <SearchBar brand="React Movies App" searchText={''} />
          <RouteTransition
             pathname={this.props.location.pathname}
              atEnter={{ opacity: 1 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
          >

        {this.props.children}
        </RouteTransition>
      </div>
    );
  }
}
