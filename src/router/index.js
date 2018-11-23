import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Hexagon, Clock, Form, Calculator, MobxSand, MobxTodo, MobxCal, MobxCart } from '@/pages';
import {Provider} from 'mobx-react'

import DevTools from 'mobx-react-devtools'
import stores from '@/store'
import './index.scss';

class AppRouter extends Component{

    render(){
        return (
            <div>
                <Provider store={stores}>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/hexagon" component={Hexagon}/>
                            <Route path="/clock" component={Clock} />
                            <Route path="/form" component={Form} />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/mobxsand" component={MobxSand} />
                            <Route path="/mobxTodo" component={MobxTodo} />
                            <Route path="/mobxCal" component={MobxCal} />
                            <Route path="/mobxCart" component={MobxCart} />
                        </Switch>
                    </HashRouter>
                </Provider>
                <DevTools />
            </div>
        )
    }
    
}


export default AppRouter;