import DemoStore from "demo/stores/DemoStore";

export interface IAppStores {
    demoStore: DemoStore;
}

export const createStores = (): IAppStores => {
    return {
        demoStore: new DemoStore()
    }
};