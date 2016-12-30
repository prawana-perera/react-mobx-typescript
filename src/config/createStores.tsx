import DemoStore from "demo/stores/DemoStore";

export interface IAppStores {
    demoStore: DemoStore;
}

const createStores = (): IAppStores => {
    return {
        demoStore: new DemoStore()
    }
};

export default createStores;
