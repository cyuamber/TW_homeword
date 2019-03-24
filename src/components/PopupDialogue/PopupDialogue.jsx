import React, { Component } from 'react';
import { Input } from '@alifd/next';
import { connect } from 'react-redux';
import action from '../../../src/pages/Dashboard/store/action';
import './PopupDialogue.scss';

export default class PopupDialogue extends Component {
  static displayName = 'PopupDialogue';

  handleDialogueAdd() {
    const { handleAddList } = this.props;
    handleAddList();
    this.handleDialogueClose();
    this.handleDialogueText('');
  }

  handleDialogueClose() {
    this.props.showToastFunc(false)
  }

  handleDialogueText(value) {
    const { handleAddStr } = this.props;
    handleAddStr(value);
  }

  render() {
    const { showDialogue } = this.props;

    return (
      <div>
        {showDialogue &&
          <div>
            <div className="popup-dialogue-layer" onClick={() => this.handleDialogueClose()}></div>
            <div className="popup-dialogue">
              <div className="popup-dialogue-arrow"></div>
              <span className="popup-dialogue-close" onClick={() => this.handleDialogueClose()}><i className="icon-close"></i></span>
              <div className="popup-dialogue-description">请用英文逗号隔开所添加的机器</div>
              <Input
                placeholder=" e.g. Chrome,Firefox"
                className="popup-dialogue-input"
                size="large"
                onChange={(value) => this.handleDialogueText(value)}
              />
              <div className="popup-dialogue-buttongroup">
                <div className="button popup-dialogue-buttongroup-add" onClick={() => this.handleDialogueAdd()}>Add Resources</div>
                <div className="button popup-dialogue-buttongroup-cancel" onClick={() => this.handleDialogueClose()}>Cancel</div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

PopupDialogue = connect(state => {
  return {
    showDialogue: state.reducer.showDialogue,
  }
}, { showToastFunc: action.showToastFunc })(PopupDialogue)
