import React, {Component} from 'react';
import './Feed.css';
import Tweet from './Tweet';


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {obj: []};
  }

  componentWillReceiveProps(props){
    this.setState(props);
  }

  render(){
    return (
      <div className="Feed">
        {Object.values(this.state.obj).map( (item) => <Tweet data={item} />)}
      </div>
    );
  }
}

export default Feed;
