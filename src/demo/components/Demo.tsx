import * as React from "react";
import {observer, inject} from 'mobx-react';

import {IAppStores} from  "config/createStores";
import DemoStore from "../stores/DemoStore";

interface IDemoProps {
    store?: DemoStore;
    compiler: string;
    framework: string;
}

@inject((stores: IAppStores) => ({store: stores.demoStore}))
@observer
export default class Demo extends React.Component<IDemoProps, {}> {

    render() {

        const {store, compiler, framework} = this.props;

        return (
            <div>
                <h2>Hello from {compiler} and {framework}!</h2>
                <div>
                    <button onClick={this.onReset}>
                        SECONDS PASSED: {store.timer}
                    </button>
                </div>
            </div>
        );
    }

    onReset = () => {
        const {store} = this.props;
        store.resetTimer();
    }
}