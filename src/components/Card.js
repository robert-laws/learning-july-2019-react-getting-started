import React from 'react';

class Card extends React.Component {

  render() {
    const profile = this.props;

    return (
      <div className="github-profile" style={{margin: '20px 10px'}}>
        <img alt="profile" src={profile.avatar_url} style={{width: '100px'}} />
        <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
          <div className="name" style={{fontWeight: 'bold', fontSize: '125%'}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

export default Card;