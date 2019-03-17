

import React, { Component } from 'react';
import TabTable from './components/TabTable';

import './CateList.scss';

export default class CateList extends Component {
  static displayName = 'CateList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cate-list-page">
        <TabTable />
      </div>
    );
  }
}
