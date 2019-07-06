import React from 'react';
import Comment from './Comment';

const CommentsList = (props) => {
  return(
    <div style={{borderBottom: '1px solid #000'}}>
      <h4 style={{margin: 10}}>Comments:</h4>
      {props.commentsData.map(comment => <Comment key={comment.id} commentText={comment.text} />)}
    </div>
  )
}

export default CommentsList;