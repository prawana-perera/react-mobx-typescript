import {observable, action} from "mobx";
import {get, post} from "axios";

export class Item {

    id: number;
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.id = Math.random();
        this.title = title;
        this.price = price;
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
            .catch(error => this.onApiCallFail(error));
    }

    @action
    private onItemsFetched(result): void {
        this._items = result.data;
        this._loading = false;
    }

    @action
    private onApiCallFail(error): void {
        this._loading = false;
        console.log(error);
    }

    @action
    public addItem(item: Item): void {
        this._loading = true;
        post<Item>('/api/items', item)
            .then(result => this.onItemAdded(result))
            .catch(error => this.onApiCallFail(error));
    }

    @action
    private onItemAdded(result): void {
        this._items.push(result.data);
        this._loading = false;
    }

    get items(): Item[] {
        return this._items;
    }

    get loading(): boolean {
        return this._loading;
    }
}
