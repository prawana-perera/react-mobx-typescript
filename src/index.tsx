import * as React from "react";
import {render} from "react-dom";

import App from "layout/App";

// Import the Hot Module Reloading App Container – more on why we use 'require' below
const {AppContainer} = require('react-hot-loader');

// Tell Typescript that there is a global variable called module - see below
declare var module: {hot: any};

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App container which handles the hot reloading
render(
    <AppContainer>
        <App title="React, MobX, TypeScript Demo" />
    </AppContainer>,
    rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept('./layout/App', () => {
        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require('./layout/App').default;

        // And render it into the root element again
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    })
}