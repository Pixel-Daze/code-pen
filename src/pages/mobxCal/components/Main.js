import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class Main extends Component  {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        const {store} = this.props
        return(
            <div>
                <p>num1: {store.countStore.number1}</p>
                <p>num2: {store.countStore.number2}</p>
                <button onClick={store.countStore.addNum1}>num1 +1</button>
                <button onClick={store.countStore.addNum2}>num2 +1</button>
            </div>
        )
    }
}

export default Main;