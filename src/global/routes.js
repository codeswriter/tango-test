import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage  from '../pages/MainPage';
import ReposPage  from '../pages/ReposPage';
import NotFoundPage  from '../pages/NotFoundPage';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/:user/repos" component={ReposPage} />
            <Route exact path="*" component={NotFoundPage}/> 
        </Switch>
    </BrowserRouter>
)