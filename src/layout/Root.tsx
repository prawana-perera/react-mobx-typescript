import React, {Component} from "react";
import {Router, browserHistory} from "react-router";
import {Provider} from "mobx-react";
import {IAppStores} from "config/stores";

interface RootProps {
    routes: () => JSX.Element;
    stores: IAppStores;
}

export default class Root extends Component<RootProps, {}> {
    render() {

        const {routes, stores}  = this.props;

        return (
            <Provider { ...stores }>
                <Router history={browserHistory}>
                    {routes()}
                </Router>
            </Provider>
        );
    }
}