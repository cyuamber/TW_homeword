import React, { Component } from 'react';
import './HistoryList.scss';

export default class HistoryList extends Component {
  static displayName = 'HistoryList';
  render() {
    return (
      <div className = "history-list">
        <p className = "history-list-title">History</p>
        <div className = "history-list-list">
            <div className = "history-list-item">jdkajdkjkjdkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkajdkj</div>
            <div className = "history-list-item">jdkajdkajdkj</div>
            <div className = "history-list-item">jdkajdkajdkj</div>
        </div>
      </div>
    );
  }
}
