"use strict";

const bases = [
    'network',
    'vm'
];

const libs = [];

for (let base of bases) {
    libs.push({
        key: base,
        commands: require(`./${base}`).commands
    });
}

module.exports = libs;