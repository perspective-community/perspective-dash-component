/* eslint-disable import/prefer-default-export */
import perspective_dash from './components/perspective_dash.react';


import * as perspective from "@jpmorganchase/perspective";
import * as wasm from "arraybuffer-loader!@jpmorganchase/perspective/build/psp.async.wasm";
import * as worker from "file-worker-loader?inline=true!@jpmorganchase/perspective/build/perspective.wasm.worker.js";

/* perspective components */
import "@jpmorganchase/perspective-viewer";
import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer-highcharts";

window.addEventListener("WebComponentsReady", function() {
    perspective.default.override({wasm, worker});
});


export {
    perspective_dash
};