import * as React from "react";
import DevTools from "mobx-react-devtools";

declare var process: {env: any};
const isDevelopmentMode = process.env.NODE_ENV === 'development';

export interface DevToolsWrapperProps {}

export default class DevToolsWrapper extends React.Component<DevToolsWrapperProps, undefined> {

    render() {
        return isDevelopmentMode ? <DevTools/> : <span />
    }
}