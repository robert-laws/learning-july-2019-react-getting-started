import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <ul style={{margin: '10px'}}>
        <li>{this.props.commentText}</li>
      </ul>
    )
  }
}

export default Comment;