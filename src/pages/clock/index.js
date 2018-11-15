import React, {Component} from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render(){
        const {date} = this.state
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock;