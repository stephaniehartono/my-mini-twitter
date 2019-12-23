import React, {Component} from 'react';
import './Profile.css';


class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {name: null, username: null, pic: null, followers: null, followings: null, protected_acc: null}
  }

  componentWillReceiveProps(props){
    this.setState(props.data);
  }

  render(){
    return (
      <div className={this.state.name != null ? "Profile" : "Profile profile-none"}>
        <div className="profiledata">
          <div style={{backgroundImage: `url(${this.state.pic != null ? this.state.pic : ""})`}} className="profilepic"></div>
          <div className="titlecontainer">
            <h2 className="white">{this.state.name != null ? this.state.name : ""}</h2>
            <p className="white">@{this.state.username != null ? this.state.username : ""}</p>
          </div>
        </div>
        <div className="profile-numbers">
          <p className="white"><b>{this.state.followers}</b> Followers</p>
          <br/>
          <p className="white"><b>{this.state.followings}</b> Following</p>
        </div>
      </div>
    );
  }
}

export default Profile;
