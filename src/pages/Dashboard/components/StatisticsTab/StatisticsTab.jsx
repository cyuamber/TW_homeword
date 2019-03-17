import React, { Component } from 'react';
import { Grid,Input,Icon } from '@icedesign/base';

import './StatisticsTab.scss';

const { Row, Col } = Grid;

export default class StatisticsTab extends Component {
  static displayName = 'StatisticsTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const { agents } = this.props;
    return (
        <div className = "statistics-tab">
            <div className = "statistics-tab-filter">
                <div className = "statistics-tab-filter-item">ALL</div>
                <div className = "statistics-tab-filter-item">Physical</div>
                <div className = "statistics-tab-filter-item">Vitual</div>
            </div>
            <div className = "statistics-tab-filter-search">
                    <Input
                        innerBefore={ <i className= "icon-th-card"></i>}
                    />
                    <div>
                      <i className= "icon-th-card statistics-tab-filter-icon"></i>
                      <i className= "icon-th-list statistics-tab-filter-icon"></i>
                    </div>

                </div>
         </div>
    );
  }
}
