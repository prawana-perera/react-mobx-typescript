import * as React from "react";
import {observer, inject} from 'mobx-react';

import {IAppStores} from  "../../config/stores";
import DemoStore from "../stores/DemoStore";

interface IDemoProps {
    store?: DemoStore;
}

@inject((stores: IAppStores) => ({store: stores.demoStore}))
@observer
export default class Demo extends React.Component<IDemoProps, {}> {

    render() {

        const {store} = this.props;

        return (
            <div>
                <h2>Demo Pages</h2>
                <div>
                    <button onClick={this.onReset}>
                        SECONDS PASSED: {store.timer}
                    </button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.onReset();
    }

    componentWillUnmount() {

    }

    onReset = () => {
        const {store} = this.props;
        store.resetTimer();
    }
}