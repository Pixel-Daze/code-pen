import React,{Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Header extends Component {
    render(){
        const {store} = this.props
        return(
            <div className="head">
                <label className="head-item">
                    <input
                        type="checkbox"
                        checked={store.cartStore.checkAll}
                        onChange={store.cartStore.onCheckAll}
                    /> 全选
                </label>
                <div className="head-item c-name">商品</div>
                <div className="head-item">单价</div>
                <div className="head-item c-buyNum">数量</div>
                <div className="head-item">小计</div>
                <div className="head-item">操作</div>
            </div>
        )
    }
}

export default Header