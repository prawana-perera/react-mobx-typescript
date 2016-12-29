import * as React from "react";
import {observer} from 'mobx-react';

import DemoStore from "demo/stores/DemoStore";

export interface DemoProps {
    compiler: string;
    framework: string;
    demoStore: DemoStore;
}

@observer
export default class Demo extends React.Component<DemoProps, {}> {

    render() {
        return (
            <div>
                <h2>Hello from {this.props.compiler} and {this.props.framework}!</h2>
                <div>
                    <button onClick={this.onReset}>
                        Seconds passed: {this.props.demoStore.timer}
                    </button>
                </div>
            </div>
        );
    }

    onReset = () => {
        this.props.demoStore.resetTimer();
    }
}