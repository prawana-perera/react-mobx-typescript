import {observable, action} from "mobx";

export default class DemoStore {

    @observable private _timer: number = 0;

    constructor() {
        setInterval(() => {
            this.incrementTimer();
        }, 1000);
    }

    @action
    resetTimer(): void {
        this._timer = 0;
    }

    @action
    private incrementTimer(): void {
        this._timer += 1;
    }

    get timer(): number {
        return this._timer;
    }
}
