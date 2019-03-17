

import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';

import './UserList.scss';

export default class UserList extends Component {
  static displayName = 'UserList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-list-page">
        <TabTable />
      </div>
    );
  }
}
