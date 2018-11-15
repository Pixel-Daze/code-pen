import React, {Component} from 'react';
import './index.scss';

class HexagonCell extends Component {
    render(){
        return(
            <div className="hexagon2" style={{backgroundImage: 'url("//imagev2.xmcdn.com/group43/M00/35/E1/wKgKjVsOoteQfA2TAAJO9RmB-9o070.jpg")'}}>
                <div className="hex1"></div>
                <div className="hex2"></div>
            </div>
        )
    }
}

export default HexagonCell;