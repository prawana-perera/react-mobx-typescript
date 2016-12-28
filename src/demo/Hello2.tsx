import * as React from "react";

export interface Hello2Props { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Hello2 extends React.Component<Hello2Props, {}> {
    render() {
        return <h2>Helloss from {this.props.compiler} and {this.props.framework}!</h2>;
    }
}