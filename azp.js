"use strict";

const toml = require('toml'),
    fs = require('fs');

const libs = require('./lib/load');

let raw = fs.readFileSync('azp.toml', 'utf8');
let config = toml.parse(raw);

let globals = config.globals;

for (let lib of libs) {
    if (config[lib.key]) {
        for (let command of lib.commands(config[lib.key], globals)) {
            console.log(command);
        }
    }
}
