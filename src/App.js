import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {profile: {name: null, username: null, pic: null, followers: null, following: null, protected: null}, data: []};
    fetch('http://localhost:80/generalSample')
    .then((data) => data.json())
    .then((data) =>{
      this.setState((oldstate) => {
        var a = oldstate;
        a.data = data;
        return a;
      });
    });
  }

  generalTweets = () =>{
    fetch('http://localhost:80/generalSample')
    .then((data) => data.json())
    .then((data) =>{
      this.setState((oldstate) => {
        var a = oldstate;
        a.data = data;
        a.profile = {name: null, username: null, pic: null, followers: null, following: null};
        return a;
      });
    });

  }

  displayUser = (name, username, pic, followers, followings, protected_acc) =>{
    console.log(protected_acc);
    if(protected_acc){
      this.setState((oldState)=> {
        var a = oldState;
        a.profile = {name: name, username: username, pic: pic, followers: followers, followings: followings};
        a.data = [];
        return a;
      })
    }
    else{
      fetch('http://localhost:80/tweets/'+username+'/10')
      .then((data) => data.json())
      .then((data) =>{
        this.setState((oldstate) => {
          var a = oldstate;
          a.data = data;
          a.profile = {name: name, username: username, pic: pic, followers: followers, followings: followings};
          return a;
        });
      });
    }
  }


  filterTweets = (query) => {
    if(query == ""){
      this.setState((oldState) => {
        var a = oldState;
        return a;
      })
    }
    else{
      fetch('http://localhost:80/tweetsq/'+this.state.profile.username+'/'+query)
      .then((data) => data.json())
      .then((data) =>{
        this.setState((oldstate) => {
          var a = oldstate;
          a.data = data;
          return a;
        });
      });
    }
  }

  render(){
    return (
      <div className="App">
        <div className="center">
          <Header displayUser={this.displayUser} generalTweets={this.generalTweets}/>
        </div>
        <div className="center scroll">
          <Content data={this.state.data} profile={this.state.profile} filterTweets={this.filterTweets}/>
        </div>
      </div>
    );
  }
}

export default App;
