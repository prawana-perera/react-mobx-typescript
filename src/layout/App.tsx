import * as React from "react";
import Hello2 from "demo/Hello2";
import DevToolsWrapper from "./DevToolsWrapper";

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <h1>React, MobX, TypeScript</h1>
                <Hello2 compiler="TypeScript" framework="React"/>
                <DevToolsWrapper/>
            </div>
        );
    }
}