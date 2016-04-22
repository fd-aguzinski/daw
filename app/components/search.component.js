import React from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends React.Component{
  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };
    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    )
  }
  render() {
    return (
      <div className="search">
        <Autocomplete
         ref="autocomplete"
         inputProps={{title: "US state"}}
         value={this.props.autoCompleteValue}
         items={this.props.tracks}
         getItemValue={(item) => item.title}
         onSelect={this.props.handleSelect}
         onChange={this.props.handleChange}
         renderItem={this.handleRenderItem.bind(this)}
       />
      </div>
    );
  }
}

export default Search


import React  from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
  }
  handleSubmit() {
    postRequest(this.state.value);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
  	return (
        <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.searchValue} onChange={this.props.handleChange}/>
    		<input type="submit"/>
        </form>
      );
    }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    };
  }
  handleSubmit() {
    postRequest(this.state.value);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
  	return (
        <Search
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
          searchValue={this.state.value}/>
      );
    }
}

export default Search
