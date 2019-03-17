import React, { PureComponent } from 'react';
import windows from '../../assets/image/osicons/windows.png';
import centos from '../../assets/image/osicons/cent_os.png';
import debin from '../../assets/image/osicons/debin.png';
import suse from '../../assets/image/osicons/suse.png';
import ubuntu from '../../assets/image/osicons/ubuntu.png';

export default class ItemIcon extends PureComponent {

  render() {
      const {iconSource} = this.props;
      let imgSource = "";
      switch (iconSource){
        case "windows":
            imgSource= windows;
        break;
        case "centos":
            imgSource= centos;
        break;
        case "debian":
            imgSource= debin;
        break;
        case "suse":
            imgSource= suse;
        break;
        case "ubuntu":
            imgSource= ubuntu;
        break;
        default:
      }

    return (
      <div className="item-icon" style={{}}>
          <img src={imgSource}/>
      </div>
    );
  }
}
