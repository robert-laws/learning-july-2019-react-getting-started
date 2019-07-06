import React from 'react';

const Welcome = (props) => {

  const getLocation = (loc) => {
    if(loc === 'home') {
      return ', welcome home!';
    } else {
      return '....'
    }
  }

  return (
    <h1>Hello {props.name}{getLocation(props.location)} </h1>
  )
}

export default Welcome;