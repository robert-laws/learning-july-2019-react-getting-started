import React from 'react';

export default class Button extends React.Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    )
  }
}