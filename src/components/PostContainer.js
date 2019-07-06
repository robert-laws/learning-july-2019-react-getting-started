import React from 'react';
import Post from './Post';
import CommentsList from './CommentsList';

class PostContainer extends React.Component {

  render() {
    return(
      <div>
        <Post postTitle={this.props.postData.title} postBody={this.props.postData.body} />
        <CommentsList commentsData={this.props.postData.comments} />
      </div>
    )
  }
}

export default PostContainer;