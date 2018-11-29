/* eslint-disable import/prefer-default-export */
import perspective_dash from './components/perspective.react';
import perspective from "@jpmorganchase/perspective";
import * as wasm from "arraybuffer-loader!@jpmorganchase/perspective/build/psp.async.wasm";
import * as worker from "file-worker-loader?inline=true!@jpmorganchase/perspective/build/perspective.wasm.worker.js";
perspective.override({wasm, worker});


export {
    perspective_dash
};