import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class CartItem extends Component {
    render(){
        const {data, store} = this.props
        return (
            <div className="cart-item">
                <label className="cart-item-box c-select">
                    <input type="checkbox" checked={data.checked} onChange={()=>store.cartStore.onChecked(data.id)}/>
                </label>
                <div className="cart-item-box c-name">{data.name}</div>
                <div className="cart-item-box c-price">¥{data.price}</div>
                <div className="cart-item-box c-buyNum">
                    <div onClick={()=>store.cartStore.sub(data.id)}>-</div>
                    <input value={data.buyNum} readOnly/>
                    <div onClick={()=>store.cartStore.add(data.id)}>+</div>
                </div>
                <div className="cart-item-box c-subTotal">¥{data.price*data.buyNum}</div>
                <div className="cart-item-box c-delete" onClick={()=>store.cartStore.removeItem(data.id)}>删除</div>
            </div>
        )
    }
}

export default CartItem