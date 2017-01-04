import * as React from "react";
import {Item} from "../stores/DemoStore";
import ItemView from "./ItemView";

export interface ItemListProps {
    items: Item[];
}

const ItemList = (props: ItemListProps) => {

    return (
        <div>
            {props.items.map(item => <ItemView key={item.id} item={item}/>)}
        </div>
    );

};

export default ItemList;