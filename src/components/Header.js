import React, {Component} from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {results:[]};
  }
  
  viewUser = (username) => {
    if(username== ""){
      this.setState( (oldstate) => {
        var a = oldstate;
        a.results = [];
        return a;
      });
    }
    else {
      fetch('http://localhost:80/searchuser/'+username+'/5').then((data) => data.json()).then(
      (data) => {
        this.setState( (oldstate) => {
          var a = oldstate;
          a.results = data;
          return a;
        });
      });
    }
  }

  handleOnClick = () => {
    this.setState((oldState)=>{
      var a = oldState;
      a.results = [];
      return a;
    });
  }

  render(){
    return (
      <div className="Header">
        <h1 onClick={() => {this.props.generalTweets()}}>Slync-Twitter</h1>
        <div className="searchuser">
          <SearchBar viewUser={this.viewUser} />
          <SearchResults displayUser={this.props.displayUser} handleOnClick={this.handleOnClick} results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Header;
