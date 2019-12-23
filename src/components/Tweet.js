import React, {Component} from 'react';
import './Tweet.css';


class Tweet extends Component {
  render(){
    return (
      <div className="Tweet">
        <div className="tweetprofile">
          <div style={{backgroundImage: `url(${this.props.data.user.profile_image_url})`}} className="profilepic">
          </div>

          <div className="profiletext">
            <p><b>{this.props.data.user.name}</b></p>
            <p>{this.props.data.user.screen_name}</p>
          </div>
        </div>

        <p className="message">{this.props.data.text}</p>
      </div>
    );
  }
}

export default Tweet;
