/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { perspective_dash } from '../lib';

import "@finos/perspective-viewer";
import "@finos/perspective-viewer-hypergrid";
import "@finos/perspective-viewer-highcharts";
import "@finos/perspective-viewer-d3fc";

import perspective from "@finos/perspective";
import * as wasm from "arraybuffer-loader!@finos/perspective/build/psp.async.wasm";
import * as worker from "file-worker-loader?inline=true!@finos/perspective/build/perspective.wasm.worker.js";

window.addEventListener("WebComponentsReady", function() {
    if (perspective) {
        perspective.override({wasm, worker});
    } else {
        console.warn('Perspective was undefined - wasm load errors may occur');
    }
});


class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <perspective_dash
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
