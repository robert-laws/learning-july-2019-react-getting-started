import React from 'react';
import Welcome from './components/Welcome';

export default class App extends React.Component {
  state = {
    friend: ''
  }

  componentDidMount() {
    this.setState({
      friend: 'Kal Kool'
    })
  }

  render() {
    return (
      <div>
        <Welcome name={'Hal Hope'} />
        <h4>friend: {this.state.friend}</h4>
      </div>
    )
  }
}
