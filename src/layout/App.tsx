import * as React from "react";
import Hello2 from "demo/Hello2";

export interface AppProps {
    title: string
}

export default class App extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Hello2 compiler="TypeScript" framework="React"/>
            </div>
        );
    }
}