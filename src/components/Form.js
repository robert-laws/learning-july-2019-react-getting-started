import React from 'react';

class Form extends React.Component {
  state = {
    userName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{padding: 20, margin: 10, backgroundColor: 'lightgray', width: 240}}>
        <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={this.handleChange} required />
        <button>Add Card</button>
      </form>
    )
  }
}

export default Form;