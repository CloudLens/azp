"use strict";

function* commands(vnet, config) {
    for (let key of Object.keys(vnet)) {
        let item = vnet[key];
        item.name = item.name || key;
        let resourceGroup = item.resource_group || config.resource_group;
        let location = item.location || config.location;
        let addressPrefixes = item.address_prefixes.join(',');

        yield `azure network vnet create --resource-group ${resourceGroup} --name ${item.name} --location ${location} --address-prefixes ${addressPrefixes}`;
        yield* subnetCommands(item, resourceGroup);
    }
}

function* subnetCommands(vnet, resourceGroup) {
    for (let key of Object.keys(vnet.subnet)) {
        let item = vnet.subnet[key];
        item.name = item.name || key;
        let addressPrefix = item.address_prefix;
        yield `azure network vnet subnet create --resource-group ${resourceGroup} --vnet-name ${vnet.name} --name ${item.name} --address-prefix ${addressPrefix}`;
    }
}

module.exports = { commands };
