import * as React from "react";
import Demo from "demo/components/Demo";
import DevToolsWrapper from "./DevToolsWrapper";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <h1>React, MobX, TypeScript</h1>
                <Demo compiler="TypeScript" framework="React and MobX"/>
                <DevToolsWrapper/>
            </div>
        );
    }
}