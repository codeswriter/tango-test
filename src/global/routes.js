import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const ReposPage = lazy(() => import('../pages/ReposPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Suspense fallback={"loading..."}>
                    <MainPage />
                </Suspense>
            </Route>
            <Route exact path="/repos">
                <Suspense fallback={"loading..."}>
                    <ReposPage />
                </Suspense>
            </Route>
            <Route exact path="*">
                <Suspense fallback={"loading..."}>
                    <NotFoundPage />
                </Suspense>
            </Route>
        </Switch>
    </BrowserRouter>
)