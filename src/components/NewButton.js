import React from 'react';

const NewButton = (props) => {
  
  const handleClick = () => {
    props.buttonAction(props.incrementValue)
  }

  return (
    <button onClick={handleClick}>
      Add {props.incrementValue}
    </button>
  )
}

export default NewButton;