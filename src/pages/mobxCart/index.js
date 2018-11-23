import React,{Component} from 'react'
import {Header, Main, Footer} from './components'
import './main.scss'

class MobxCart extends Component {
    render(){
        return(
            <div className="mobx-cart">
                <h1>React+Mobx购物车示例</h1>
                <Header/>
                <Main />
                <Footer />
            </div>
        )
    }
}

export default MobxCart