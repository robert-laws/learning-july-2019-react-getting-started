import React from 'react';

class Post extends React.Component {

  render() {
    return(
      <div>
        <div style={{fontSize: '20px', fontWeight: 'bold', margin: 10}}>
          {this.props.postTitle}
        </div>
        <div style={{margin: 10}}>
          {this.props.postBody}
        </div>
      </div>
    )
  }
}

export default Post;