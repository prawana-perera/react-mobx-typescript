import * as React from "react";
import {render} from "react-dom";
import {useStrict} from "mobx";

import Root from "layout/Root";
import routes from "config/routes";
import {createStores} from "config/stores";

useStrict(true);

const {AppContainer} = require('react-hot-loader');
const stores = createStores();

// Tell Typescript that there is a global variable called module - see below
declare var module: {hot: any};

const renderApp = (appRoutes : () => JSX.Element) => {
    render(
        <AppContainer>
            <Root stores={stores} routes={routes}/>
        </AppContainer>,
        document.getElementById('app')
    );
};

renderApp(routes);

if (module.hot) {
    module.hot.accept('./config/routes', () => {
        const NextRoot = require('./config/routes').default;
        renderApp(NextRoot);
    });
}