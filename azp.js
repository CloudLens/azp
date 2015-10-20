"use strict";

const toml = require('toml'),
    fs = require('fs');

const libs = require('./lib/load');

let raw = fs.readFileSync('azp.toml', 'utf8');
let config = toml.parse(raw);

for (let lib of libs) {
    if (config[lib.key]) {
        for (let command of lib.commands(config[lib.key], config)) {
            console.log(command);
        }
    }
}
//
//if (config.vnet) {
//    for (let command of require('./lib/vnet').commands(config)) {
//        console.log(command);
//    }
//}
//
//if (config.vm) {
//    for (let command of require('./lib/vm').commands(config)) {
//        console.log(command);
//    }
//}
