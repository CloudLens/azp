"use strict";

function* commands(network, config) {
    if (network.vnet) {
        yield* require('./vnet').commands(network.vnet, config);
    }
}

module.exports = { commands };