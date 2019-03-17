import React, { Component } from 'react';

import RealTimeStatistics from './components/RealTimeStatistics';
import StatisticsItem from './components/StatisticsItem';
import StatisticsTab from './components/StatisticsTab';

import axios from 'axios';

import './Dashboard.scss';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      sumNum: {
        total: 0,
        idle: 0,
        building: 0,
        physical: 0,
        virtual: 0,
      }
    };
  }
  componentDidMount () {
    axios
      .get('/mock/table-list.json')
      .then((response) => {
        if(!response.data.errno === 0) return
        let totalNum = response.data.data.agents.length;
        let idleNum = 0;
        let buildingNum = 0;
        let physicalNum = 0;
        let virtualNum = 0;
        response.data.data.agents.map(item=>{
          if(item.status === "idle"){
            idleNum++;
          }
          if(item.status === "building"){
            buildingNum++;
          }
          if (item.type === "physical") {
            physicalNum++;
          }
          if (item.type === "virtual") {
            virtualNum++;
          }
        })
        this.setState({
            agents: response.data.data.agents,
            sumNum: {
              total: totalNum,
              idle: idleNum,
              building: buildingNum,
              physical: physicalNum,
              virtual: virtualNum,
            }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { agents, sumNum } = this.state;
    return (
      <div className="dashboard-page">
        <RealTimeStatistics agents = { agents } sumNum = { sumNum }/>
        <StatisticsTab agents={agents} />
        <StatisticsItem agents={agents}/>
      </div>
    );
  }
}
