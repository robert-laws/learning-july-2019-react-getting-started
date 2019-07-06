import React from 'react';

const WelcomeInput = (props) => {

  const newName = (event) => {
    event.preventDefault();
    props.nameUpdate('Hal')
  }

  return (
    <div>
      <form onSubmit={newName}>
        <button type="submit">Update Name</button>
      </form>
    </div>
  )
}

export default WelcomeInput;