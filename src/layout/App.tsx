import * as React from "react";
import Demo from "demo/components/Demo";
import { Link } from 'react-router';

import DevToolsWrapper from "./DevToolsWrapper";

interface AppProps {
}

export default class App extends React.Component<AppProps, {}> {

    render() {
        return (
            <div>
                <h1>React, MobX, TypeScript</h1>
                <ul>
                    <li><Link to='/'>Home Link</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/help'>Need Help?</Link></li>
                </ul>
                {this.props.children}
                <DevToolsWrapper/>
            </div>
        );
    }
}