import React,{Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Footer extends Component{
    render(){
        const {store} = this.props
        return(
            <div className="footer">
                <p>合计：{store.cartStore.totalPrice}</p>
            </div>
        )
    }
}

export default Footer