import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Hexagon, Clock, Form, Calculator } from '@/pages';
import './index.scss';

class AppRouter extends Component{

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/hexagon" component={Hexagon}/>
                    <Route path="/clock" component={Clock} />
                    <Route path="/form" component={Form} />
                    <Route path="/calculator" component={Calculator} />
                </Switch>
            </HashRouter>
        )
    }
    
}


export default AppRouter;