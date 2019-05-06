import React from 'react';

class PlayerDisplayNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    return (e) => {
      this.props.history.push(`/${this.props.match.params[0]}/${type.toLowerCase()}`);
    }
  }
  
  render() {
    return (
      <div className={'player-display-nav-container'}>
        <ul>
          {this.props.headings.map((heading, idx) => {
            // debugger;
            return (
            <li key={idx} onClick={this.handleClick(heading)}>{heading}</li>
            )}
          )}
        </ul>
      </div>
    )
  }
}

export default PlayerDisplayNav;