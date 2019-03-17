

import React, { Component } from 'react';
import SimpleFluencyForm from './components/SimpleFluencyForm';

import './CreateTag.scss';

export default class CreateTag extends Component {
  static displayName = 'CreateTag';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="create-tag-page">
        <SimpleFluencyForm />
      </div>
    );
  }
}
