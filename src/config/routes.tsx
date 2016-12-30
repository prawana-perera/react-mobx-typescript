import * as React from "react";
import {Route, IndexRoute} from "react-router";

import App from "layout/App";
import Demo from "demo/components/Demo";
import Help from "demo/components/Help";
import About from "demo/components/About";

const routes = (): JSX.Element => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Demo}/>
            <Route path="/help" component={Help}/>
            <Route path="/about" component={About}/>
        </Route>
    );
};

export default routes;