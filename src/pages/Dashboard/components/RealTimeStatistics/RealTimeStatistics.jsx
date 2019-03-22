import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;
import './RealTimeStatistics.scss';

export default class RealTimeStatistics extends Component {
  static displayName = 'RealTimeStatistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sumNum } = this.props;
    return (
      <Row wrap gutter="20" justify='space-between'>
        <Col xxs="20" s="12" l="8">
          <div className="itemBody orange">
            <div className="itemBackgroundIcon">
              <i className = "icon-cog rotateIcon"></i>
            </div>
            <div className="itemTitle">
              <p className="titleText">Building</p>
              <span className="titleNum">{sumNum.building}</span>
            </div>
          </div>
        </Col>
        <Col xxs="20" s="12" l="8">
          <div className="itemBody green">
          <div className="itemBackgroundIcon"><i className = "icon-coffee"></i></div>
            <div className="itemTitle">
              <p className="titleText">Idle</p>
              <span className="titleNum">{sumNum.idle}</span>
            </div>
          </div>
        </Col>
        <Col xxs="20" s="12" l="8">
          <div className="itemBody itemStatic">
            <div className="itemRow">
              <div className="itemCol">
                <p className="desc">ALL</p>
                <h2 className="itemStaticstic">{sumNum.total}</h2>
              </div>
              <div className="itemCol">
                <p className="desc">PHYSICAL</p>
                <h2 className="itemStaticstic">{sumNum.physical}</h2>
              </div>
              <div className="itemCol">
                <p className="desc">VIRTUAL</p>
                <h2 className="itemStaticstic">{sumNum.virtual}</h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
