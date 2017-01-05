import * as React from "react";
import {Item} from "../stores/DemoStore";
import {observable, action} from "mobx";
import {observer} from "mobx-react";

interface ItemInputProps {
    onAddItem: (item: Item) => void
}

@observer
export default class ItemInput extends React.Component<ItemInputProps, {}> {

    @observable
    private title: string = "";

    @observable
    private price: string = "";

    render() {

        const {onAddItem} = this.props;

        return (
            <div>
                Title: <input id="title" name="title" type="text" value={this.title} onChange={this.onTitleChange}/><br/>
                Price: <input id="price" name="price" type="number" value={this.price} onChange={this.onPriceChange}/><br/>
                <button onClick={this.onSubmit}>Adds</button>
            </div>

        );
    }

    @action
    onTitleChange = (e) => {
        this.title = e.target.value;
    };

    @action
    onPriceChange = (e) => {
        this.price = e.target.value
    };

    @action
    onSubmit = (e) => {

        const {onAddItem} = this.props;
        onAddItem(this.createItem(this.title, Number.parseFloat(this.price)));

        this.title = "";
        this.price = "";
    };

    createItem = (title: string, price: number) => new Item(title, price);
}