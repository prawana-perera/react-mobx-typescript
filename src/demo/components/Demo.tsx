import * as React from "react";
import {observer, inject} from "mobx-react";
import {IAppStores} from "../../config/stores";
import DemoStore, {Item} from "../stores/DemoStore";
import ItemList from "./ItemList";

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
                <h3>Items from REST call</h3>
                <div>
                    {store.loading ? (<h3>Loading Items</h3>) : (<ItemList items={store.items} onAddItem={this.onAddItem}/>)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        const {store} = this.props;
        store.fetchItems();
    }

    onReset = () => {
        const {store} = this.props;
        store.resetTimer();
    };

    onAddItem = (item: Item) => {
        const {store} = this.props;
        store.addItem(item);
    }
}