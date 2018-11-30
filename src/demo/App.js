/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { perspective_dash } from '../lib';


import * as perspective from "@jpmorganchase/perspective";
import * as wasm from "arraybuffer-loader!@jpmorganchase/perspective/build/psp.async.wasm";
import * as worker from "file-worker-loader?inline=true!@jpmorganchase/perspective/build/perspective.wasm.worker.js";
// perspective.override({wasm, worker});

/* perspective components */
import "@jpmorganchase/perspective-viewer";
import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer-highcharts";


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
