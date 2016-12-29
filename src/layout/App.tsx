import * as React from "react";
import Demo from "demo/components/Demo";
import DemoStore from "demo/stores/DemoStore";
import DevToolsWrapper from "./DevToolsWrapper";

export interface AppProps {
}
const demoStore = new DemoStore();

export default class App extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <h1>React, MobX, TypeScript</h1>
                <Demo demoStore={demoStore} compiler="TypeScript" framework="React and MobX"/>
                <DevToolsWrapper/>
            </div>
        );
    }
}