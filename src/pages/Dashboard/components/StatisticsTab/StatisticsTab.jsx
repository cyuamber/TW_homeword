import React, { Component } from 'react';
import { Grid, Input, Icon } from '@icedesign/base';

import './StatisticsTab.scss';

const { Row, Col } = Grid;

export default class StatisticsTab extends Component {
  static displayName = 'StatisticsTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      tabClass: {
        all: "statistics-tab-filter-item",
        physical: "statistics-tab-filter-item",
        virtual: "statistics-tab-filter-item",
      }
    };
    this.defaultTab = "statistics-tab-filter-item"
  }

  render() {
    //const { agents } = this.props;
    const { tabClass } = this.state;
    return (
      <div className="statistics-tab">
        <div className="statistics-tab-filter">
          <div className={tabClass.all}>ALL</div>
          <div className={tabClass.physical}>Physical</div>
          <div className={tabClass.virtual}>Vitual</div>
        </div>
        <div className="statistics-tab-filter-search">
          <Input
            addonBefore={<i className="icon-search"></i>}
          />
          <div>
            <i className="icon-th-card statistics-tab-filter-icon"></i>
            <i className="icon-th-list statistics-tab-filter-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
