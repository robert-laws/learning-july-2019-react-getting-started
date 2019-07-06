import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    userName: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName: ''})
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