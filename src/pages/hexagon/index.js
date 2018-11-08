import React, {Component} from 'react';
import './index.scss';
import { HexagonCell } from '@/components'

class Hexagon extends Component {
    render(){
        return(
            <div>
                <HexagonCell />
            </div>
        )
    }
}

export default Hexagon;