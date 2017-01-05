import * as React from "react";
import {Item} from "../stores/DemoStore";
import ItemView from "./ItemView";
import ItemInput from "./ItemInput";

export interface ItemListProps {
    items: Item[];
    onAddItem: (item: Item) => void
}

const createItem = (title: string, price: number) => new Item(title, price);

const ItemList = (props: ItemListProps) => {

    return (
        <div>
            {props.items.map(item => <ItemView key={item.id} item={item}/>)}
            <h3>Add a new item</h3>
            <ItemInput onAddItem={props.onAddItem}/>
        </div>
    );

};

export default ItemList;