import React, {Component} from 'react';
import './SearchResults.css';
import SearchResultsUser from './SearchResultsUser';

class SearchResults extends Component {

  constructor(props){
    super(props);
    this.state = {results: []}; //format {name: "", username: ""}
  }

  componentWillReceiveProps(props){
    this.setState( () => {
      return {results: props.results};
    });
  }

  render(){
    return (
      <div className={this.state.results.length == 0 ? "SearchResults gone" : "SearchResults"}>
        {this.state.results.map( (item) => <SearchResultsUser name={item.name} username={item.screen_name} pic={item.profile_image_url} displayUser={this.props.displayUser} handleOnClick={this.props.handleOnClick} followers={item.followers_count} followings={item.friends_count} protected_acc={item.protected}/>)}
      </div>
    );
  }
}

export default SearchResults;
