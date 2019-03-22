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
  componentWillReceiveProps(nextProps,nextState){
    const { showModal } = nextProps;
    const { showDialogue } = this.state;
    console.log(showModal,'====nextprops')
    // console.log(this.props.showModal,showModal !== this.props.showModal,'====this.props')
    console.log(showDialogue,'===showDialogue',nextState)
    if(showModal !== this.props.showModal){
      this.setState({
        showDialogue: showModal
      })
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   const { showModal } = nextProps;
  //   const {showDialogue} = nextState;
  //   console.log(showModal, showDialogue,'nextstate',this.state.showDialogue,'this.state','===should')
  //   if(nextState.showDialogue !== this.state.showDialogue){
  //     console.log(showModal,'===showModal')
  //     this.setState({
  //       showDialogue: showModal
  //     })
  //     return false
  //   }
  //   return false
  // }

  handleDialogueAdd(){
      const { handleAddList } = this.props;
      handleAddList();
      this.handleDialogueClose();
      this.handleDialogueText('');
  }
  handleDialogueClose(){
    console.log('===handleclose')
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
    console.log('===render')
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
