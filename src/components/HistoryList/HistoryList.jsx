import React, { Component } from 'react';
import axios from 'axios';
import './HistoryList.scss';

export default class HistoryList extends Component {
  static displayName = 'HistoryList';

  constructor(props) {
    super(props);
    this.state = {
      historyList: []
    }
  }
  componentDidMount() {
    axios
      .get('/mock/history-list.json')
      .then((response) => {
        if (response.data.errno !== 0) return
        this.setState({
          historyList: response.data.data.history
        })
      }).catch((error) => {
        console.log(error);
      })
  }
  render() {
    const { historyList } = this.state;
    return (
      <div className="history-list">
        <p className="history-list-title">History</p>
        <div className="history-list-list">
          {
            historyList.map((item, index) => <div key={index + 1} className="history-list-item">{item.name}</div>)
          }
        </div>
      </div>
    );
  }
}
