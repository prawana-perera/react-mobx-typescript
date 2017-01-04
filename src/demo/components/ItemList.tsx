import * as React from "react";
import {Item} from "../stores/DemoStore";
import ItemView from "./ItemView";

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
            <div>
                Title: <input id="title" name="title"/><br/>
                Price: <input id="price" name="price"/><br/>
                <button onClick={() => props.onAddItem(createItem("Abc", 12.99))}>Add</button>
            </div>
        </div>
    );

};

export default ItemList;