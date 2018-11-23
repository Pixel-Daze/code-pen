import React,{Component} from 'react'
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class AllNum extends Component{
    
    render(){
        const {store} = this.props
        return <div>num1 + num2 = {store.countStore.getTotal}</div>
    }
}

export default AllNum