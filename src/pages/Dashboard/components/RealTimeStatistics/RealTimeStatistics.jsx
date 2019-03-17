import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

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
    console.log(sumNum,'===sumNum')
    return (
      <Row wrap gutter="20" justify='space-between'>
        <Col xxs="20" s="12" l="8">
          <div style={{ ...styles.itemBody, ...styles.orange }}>
            <div style={styles.itemBackgroundIcon}><i className = "icon-cog"></i></div>
            <div style={styles.itemTitle}>
              <p style={styles.titleText}>Building</p>
              <span style={styles.titleNum}>{sumNum.building}</span>
            </div>
          </div>
        </Col>
        <Col xxs="20" s="12" l="8">
          <div style={{ ...styles.itemBody, ...styles.green }}>
          <div style={styles.itemBackgroundIcon}><i className = "icon-coffee"></i></div>
            <div style={styles.itemTitle}>
              <p style={styles.titleText}>Idle</p>
              <span style={styles.titleNum}>{sumNum.idle}</span>
            </div>
          </div>
        </Col>
        <Col xxs="20" s="12" l="8">
          <div style={{ ...styles.itemBody, ...styles.itemStatic }}>
            <div style={styles.itemRow}>
              <div style={styles.itemCol}>
                <p style={styles.desc}>ALL</p>
                <h2 style={styles.itemStaticstic}>{sumNum.total}</h2>
              </div>
              <div style={styles.itemCol}>
                <p style={styles.desc}>PHYSICAL</p>
                <h2 style={styles.itemStaticstic}>{sumNum.physical}</h2>
              </div>
              <div style={styles.itemCol}>
                <p style={styles.desc}>VIRTUAL</p>
                <h2 style={styles.itemStaticstic}>{sumNum.virtual}</h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = {
  item: {
    width: '25%',
    padding: '0 10px',
  },
  itemBody: {
    marginBottom: '20px',
    padding: '10px 20px',
    borderRadius: '4px',
    color: '#fff',
    height: '144px',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBackgroundIcon: {
    position: 'absolute',
    top: 70,
    opacity: '0.2',
    fontSize: 165,
    marginLeft: '3%',
  },
  itemTitle: {
    position: 'relative',
  },
  titleText: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  titleNum: {
    position: 'absolute',
    right: 0,
    top: 50,
    fontSize: '48px',
  },
  itemNum: {
    margin: '16px 0',
    fontSize: '32px',
  },
  itemStatic: {
    textAlign: 'center',
    background: '#ffffff',
    color: '#2d4054',
  },
  itemStaticstic: {
    marginTop: 48,
    fontSize: '20px',
  },
  total: {
    margin: 0,
    fontSize: '12px',
  },
  desc: {
    margin: 0,
    marginTop: 5,
    fontSize: '12px',
  },
  orange:{
    background: '#ff9a2a',
  },
  green: {
    background: '#7fbc39',
  },
  lightBlue: {
    background: '#38A1F2',
  },
  darkBlue: {
    background: '#7538C7',
  },
  navyBlue: {
    background: '#3B67A4',
  },
};
