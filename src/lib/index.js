/* eslint-disable import/prefer-default-export */
import perspective_dash from './components/perspective_dash.react';

/* perspective components */
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

export {
    perspective_dash
};