import  React from 'react';

export default class Logout extends React.Component {
  componentDidMount () {
localStorage.removeItem('token');
localStorage.removeItem('token');


  }

  render () {
    return <p>You are now logged out</p>;
  }
}
