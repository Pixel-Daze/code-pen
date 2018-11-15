import React, {Component} from 'react'

class BoilingVerdict extends Component {
    render(){
        const {celsius} = this.props
        return (
            <p>{celsius >= 100 ? '水会烧开' : '水不会烧开'}</p>
        )
    }
}

export default BoilingVerdict