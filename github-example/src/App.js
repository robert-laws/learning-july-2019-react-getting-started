import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
// import testData from './data/github-data';

class App extends React.Component {
  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}

export default App;

// GitHub Api
// https://api.github.com/users/robert-laws