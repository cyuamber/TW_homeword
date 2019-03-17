

import React, { Component } from 'react';
import TabTable from './components/TabTable';

import './TagList.scss';

export default class TagList extends Component {
  static displayName = 'TagList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tag-list-page">
        <TabTable />
      </div>
    );
  }
}
