import React from 'react';
import posts from './data/posts';
import PostContainer from './components/PostContainer';

class App extends React.Component {
  state = {
    posts: posts
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.posts.map(({id, ...post}) => <PostContainer key={id} postData={post} />)}
      </div>
    )
  }
}

export default App;