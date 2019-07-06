import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import testData from './data/github-data';

class App extends React.Component {
  state = {
    profiles: testData
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;

// GitHub Api
// api.github.com/users/robert-laws