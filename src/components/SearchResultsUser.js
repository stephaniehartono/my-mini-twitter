import React, {Component} from 'react';
import './SearchResultsUser.css';

class SearchResultsUser extends Component {
  render(){
    return (
      <div className="SearchResultsUser" onClick={() => {

        console.log(this.props);
        this.props.displayUser(this.props.name, this.props.username, this.props.pic, this.props.followers, this.props.followings, this.props.protected_acc);
        this.props.handleOnClick();}

      }>
        <div style={{backgroundImage: `url(${this.props.pic})`}} className="profilepic"></div>
        <div className="textcontainer">
          <p>{this.props.name}</p>
          <p>@{this.props.username}</p>
        </div>
      </div>
    );
  }
}

export default SearchResultsUser;
