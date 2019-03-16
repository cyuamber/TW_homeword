import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/image/logo.svg';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={{}}>
        <Link to="/" className="logo-text">
          <img src={logo}/>
        </Link>
      </div>
    );
  }
}
