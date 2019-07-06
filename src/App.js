import React from 'react';
import Welcome from './components/Welcome';
import WelcomeInput from './components/WelcomeInput';
// import Button from './components/Button';
import NewButton from './components/NewButton';
import DisplayCounter from './components/DisplayCount';

export default class App extends React.Component {
  state = {
    name: '',
    newCounter: 0
  }

  updateName = (newName) => {
    this.setState({
      name: newName
    })
  }

  incrementCounter = (incrementValue) => {
    this.setState({
      newCounter: this.state.newCounter + incrementValue
    })
  }

  render() {
    return (
      <>
        <p>
          <Welcome name={this.state.name} location={'home'} />
          <WelcomeInput nameUpdate={this.updateName}/>
        </p>
        
        <NewButton buttonAction={this.incrementCounter} incrementValue={5} />
        <NewButton buttonAction={this.incrementCounter} incrementValue={25} />
        <NewButton buttonAction={this.incrementCounter} incrementValue={100} />
        <DisplayCounter number={this.state.newCounter} />
      </>
    )
  }
}
