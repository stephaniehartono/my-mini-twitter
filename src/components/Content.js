import React, {Component} from 'react';
import './Content.css';
import SearchIcon from '../assets/search.svg';
import DeleteIcon from '../assets/close.svg';
import Profile from './Profile';
import Feed from './Feed';

class Content extends Component {

  constructor(props){
    super(props);
    this.state = {profile: {name: null, username: null, pic: null, followers: null, following: null, protected_acc: null}, data: [], keyword:null};
  }

  componentWillReceiveProps(props){
    this.setState(props);
  }

  handleChange = (event) =>{
    this.setState({keyword: event.target.value});
    this.props.filterTweets(event.target.value);
  }

  render(){
    return (
      <div className="Content">
        <div className="content-container">
          <Profile data={this.state.profile}/>
          <div className={this.state.profile.name != null ? "tweetheader" : "gone"} >
            <h2 className="blue">Tweets</h2>
            <div className="searchbar">
              <div className="searchicon">
                <img src={SearchIcon} />
              </div>
              <input className="searchinput" placeholder="search tweets" value={this.state.keyword} onChange={this.handleChange}/>
              <div className="searchdelete">
                <img src={DeleteIcon} />
              </div>
            </div>
          </div>
          <Feed obj={this.state.data} keyword={this.state.keyword}/>
        </div>
      </div>
    );
  }
}

export default Content;
