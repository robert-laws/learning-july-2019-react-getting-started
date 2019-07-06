import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="" style={{padding: 20, margin: 10, backgroundColor: 'lightgray', width: 240}}>
        <input type="text" placeholder="GitHub username" />
        <button>Add Card</button>
      </form>
    )
  }
}

export default Form;