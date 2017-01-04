import {observable, action} from "mobx";
import {get} from "axios";

export class Item {

    private _id: number;
    private _title: string;
    private _price: number;

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get price(): number {
        return this._price;
    }
}

export default class DemoStore {

    @observable private _timer: number = 0;
    @observable private _loading: boolean = false;
    @observable private _items: Item[] = [];

    constructor() {
        setInterval(() => {
            this.incrementTimer();
        }, 1000);
    }

    @action
    public resetTimer(): void {
        this._timer = 0;
    }

    @action
    private incrementTimer(): void {
        this._timer += 1;
    }

    get timer(): number {
        return this._timer;
    }

    @action
    public fetchItems(): void {
        this._loading = true;

        get<Item[]>('/api/items')
            .then(result => this.onItemsFetched(result))
            .catch(error => this.onItemFetchFail(error));
    }

    @action
    private onItemsFetched(result): void {
        this._items = result.data;
        this._loading = false;
    }

    @action
    private onItemFetchFail(error): void {
        this._loading = false;
        console.log(error);
    }

    get items(): Item[] {
        return this._items;
    }

    get loading(): boolean {
        return this._loading;
    }
}
