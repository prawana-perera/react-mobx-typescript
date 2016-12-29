import {observable} from 'mobx';

export default class DemoStore {

    @observable private _timer: number = 0;

    constructor() {
        setInterval(() => {
            this._timer += 1;
        }, 1000);
    }

    resetTimer(): void {
        this._timer = 0;
    }

    get timer(): number {
        return this._timer;
    }
}