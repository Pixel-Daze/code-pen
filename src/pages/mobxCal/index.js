import React, { Component } from 'react'
import {AllNum, Main} from './components'

class MobxCal extends Component  {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <Main />
                <AllNum />
            </div>
        )
    }
}

export default MobxCal;