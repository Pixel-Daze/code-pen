import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Hexagon } from '@/pages';
import './index.scss';

class AppRouter extends Component{

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/hexagon" component={Hexagon}/>
                </Switch>
            </HashRouter>
        )
    }
    
}


export default AppRouter;