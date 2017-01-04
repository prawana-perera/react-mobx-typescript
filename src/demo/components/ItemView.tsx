import * as React from "react";
import {Item} from "../stores/DemoStore";

export interface ItemViewProps {
    item: Item;
}

const ItemView = (props: ItemViewProps) => {

    return (
        <div>
            {props.item.title} - {"$" + props.item.price}
        </div>
    );

};

export default ItemView;