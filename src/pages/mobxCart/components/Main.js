import React,{Component} from 'react';
import CartItem from './CartItem'
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Main extends Component{
    render(){
        const {store} = this.props
        return(
            <div className="main">
                {store.cartStore.list.map((item, i) => <CartItem data={item} key={i} />)}
            </div>
        )
    }
}

export default Main