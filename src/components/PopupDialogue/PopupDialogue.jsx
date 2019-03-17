import React, { Component } from 'react';
import { Input } from '@alifd/next';
import './PopupDialogue.scss';

export default class PopupDialogue extends Component {
  static displayName = 'PopupDialogue';
  constructor(props) {
    super(props);
    this.state = {
        showDialogue: false
    };
  }
  // componentWillReceiveProps (nextProps) {
  //   const {showModal,showIndex} = nextProps;
  //   console.log(this.props,nextProps,'========',showIndex)
  //   // if (showModal !== this.props.showModal){
  //     this.setState({
  //       showDialogue: showModal
  //     })
  //   // }
  // }
  componentWillMount () {
    const { showModal, showIndex } = this.props;
    console.log(this.props,'========',showIndex)
      this.setState({
        showDialogue: showModal
      })
  }
  handleDialogueAdd(){
      const { handleAddList } = this.props;
      handleAddList();
      this.handleDialogueClose();
  }
  handleDialogueClose(){
    this.setState({
        showDialogue: false
    })
  }
  handleDialogueText(value){
      const { handleAddStr } = this.props;
      handleAddStr(value);
  }

  render() {
    const { showDialogue } = this.state;
    return (
        <div>
            {showDialogue && <div className = "popup-dialogue">
                <span className = "popup-dialogue-close" onClick = {()=>this.handleDialogueClose()}><i className="icon-close"></i></span>
                <div className = "popup-dialogue-description">请用英文逗号隔开所添加的机器</div>
                <Input
                    className = "popup-dialogue-input"
                    size="large"
                    onChange = {(value)=>this.handleDialogueText(value)}
                />
                <div className = "popup-dialogue-buttongroup">
                    <div className = "button popup-dialogue-buttongroup-add" onClick = {()=>this.handleDialogueAdd()}>Add Resources</div>
                    <div className = "button popup-dialogue-buttongroup-cancel" onClick = {()=>this.handleDialogueClose()}>Cancel</div>
                </div>
            </div>
            }
        </div>
    );
  }
}
