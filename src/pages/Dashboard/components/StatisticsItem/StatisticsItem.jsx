import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import ItemIcon from '../../../../components/ItemIcon';
import PopupDialogue from '../../../../components/PopupDialogue';


import './StatisticsItem.scss';

const { Row, Col } = Grid;

export default class StatisticsItem extends Component {
  static displayName = 'StatisticsItem';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
        resourceList: [],
        showaddItem: false,
        currentItem: 0,
        popupText: ''
    };
  }
  componentWillReceiveProps(nextProps){
      const {agents} = nextProps;
      this.setState({
        resourceList: agents
      })
  }
  showAddItem = (index) => {
      this.setState({ showaddItem: true, currentItem: index });
  }
  handleChildAdd = (str) => {
      this.setState({ popupText: str })

  }
  addItem = ( allSource, orignList, originIndex) => {
      const { popupText } = this.state;
      let str = popupText;
      let tempArr=str.split(',')
      let cleanArr = tempArr.filter(item => item.length > 0)
      let additem = orignList.concat(cleanArr);
      allSource[originIndex].resources = additem;
      this.setState({
        resourceList: allSource
      })

  }
  deleteItem= (allSource, list, index, originIndex)=>{
      list.splice(index,1)
      let changeItem = this.state.resourceList[originIndex];
      allSource[originIndex] = changeItem;
      this.setState({
        resourceList: allSource
      })
  }

  render() {
      const { agents } = this.props;
      const {resourceList, showaddItem, currentItem} =  this.state;
      console.log(currentItem,'==currentItem',showaddItem,'==showaddItem')
      let showItem = agents.map((item, index)=>
        <div key = {index} className = "statistics-item">
            <div className = "statistics-item-icon">
                <ItemIcon iconSource = {item.os}/>
            </div>
            <div className = "statistics-item-col">
                <div className = "statistics-item-col-info">
                    <div className = "statistics-item-col-info-item"><i className = "icon-desktop big-icon"></i><span className = "green-text right-text">{item.name}</span></div>
                    <div className = {item.status==='building'?"tag tag-orange":"tag tag-green"}> {item.status} </div>
                    <div className = "statistics-item-col-info-item"><i className = "icon-info big-icon"></i><span className="right-text">{item.ip}</span></div>
                    <div className = "statistics-item-col-info-item"><i className = "icon-folder big-icon"></i><span className="right-text">{item.location}</span></div>
                </div>
                <div className = "statistics-item-col-operation">
                    <div className = "statistics-item-col-operation-plusholder"><i className = "icon-plus" onClick = {()=>this.showAddItem(index)}></i></div>
                        { currentItem === index ?
                            <PopupDialogue
                                showIndex ={ index }
                                showModal = { showaddItem }
                                handleAddStr = {(str)=>this.handleChildAdd(str)}
                                handleAddList = {()=>this.addItem(agents,resourceList[index].resources,index)}
                            /> : null
                        }
                    <div className = "statistics-item-col-operation-container">
                        {resourceList[index].resources.map((resource,t)=>{
                            return <div key = {t+1} className = "statistics-item-col-operation-icon"><div className = "small-text">{resource}</div><i className = "icon-trash" onClick = {()=>this.deleteItem(agents,resourceList[index].resources,t,index)}></i></div>
                        })}
                    </div>
                    {item.status === "building"?
                        <div className = "statistics-item-col-operation-deny"><i className = "icon-deny"></i><span className="right-text">Deny</span></div>
                        : null
                    }
                </div>
            </div>
        </div>
      )
    return (
        <div>
            {showItem}
        </div>
    );
  }
}
