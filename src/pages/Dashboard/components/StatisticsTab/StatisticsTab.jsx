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
        all: "statistics-tab-filter-item visited",
        physical: "statistics-tab-filter-item",
        virtual: "statistics-tab-filter-item",
      }
    };
    this.defaultTab = "statistics-tab-filter-item"
  }
  addActivestyle(type) {
    console.log(type, '===type')
    let changeObj = {}
    switch (type) {
      case 'all':
        console.log(this.defaultTab, 'all===')
        changeObj = {
          all: "statistics-tab-filter-item visited",
          physical: this.defaultTab,
          virtual: this.defaultTab,
        }
        break;
      case 'physical':
        console.log(this.defaultTab, 'physical===')
        changeObj = {
          all: this.defaultTab,
          pyhsical: "statistics-tab-filter-item visited",
          virtual: this.defaultTab,
        }
        break;
      case 'virtual':
        console.log(this.defaultTab, 'virtual===')
        changeObj = {
          all: this.defaultTab,
          pyhsical: this.defaultTab,
          virtual: "statistics-tab-filter-item visited",
        }
        break;
      default:
    }
    console.log(changeObj, 'changeObj')
    this.setState({
      tabClass: changeObj
    })
  }

  render() {
    const { agents } = this.props;
    const { tabClass } = this.state;
    //console.log(tabClass,'===render-tabClass')
    return (
      <div className="statistics-tab">
        <div className="statistics-tab-filter">
          <div onClick={() => this.addActivestyle('all')} className={tabClass.all}>ALL</div>
          <div onClick={() => this.addActivestyle('physical')} className={tabClass.physical}>Physical</div>
          <div onClick={() => this.addActivestyle('virtual')} className={tabClass.virtual}>Vitual</div>
        </div>
        <div className="statistics-tab-filter-search">
          <Input
            innerBefore={<i className="icon-th-card"></i>}
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
