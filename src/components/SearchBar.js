import React, {Component} from 'react';
import SearchImage from '../assets/search.svg';
import AtImage from '../assets/at.svg';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {focus: false, value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.props.viewUser(event.target.value);
  }

  handleKeyDown = (e) => {
    if(this.state.value == '') this.props.viewUser("");
  }

  foc = () => {
    this.setState( () => {
      return {focus: true};
    });
  }

  blu = () => {
    this.setState( () => {
      return {focus: false};
    });
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="searchicon">
          <img src={this.state.focus ? AtImage : SearchImage} />
        </div>

        <input className="searchinput" placeholder="search user" onFocus={this.foc} onBlur={this.blu} type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
      </div>
    );
  }
}

export default SearchBar;
