import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="details">
        <h3>{this.props.title}</h3>
      </div>
    )
  }

}

export default Title
