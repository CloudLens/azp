"use strict";
const auto = require('./auto');

const flags = auto.fieldFlagFunc(['resource_group', 'location', 'os_type', 'image_urn', 'admin_username',
    'admin_password', 'ssh_publickey_file', 'public_ip_name', 'public_ip_domain_name', 'storage_account_name',
    'enable_boot_diagnostics', 'boot_diagnostics_storage_uri', 'nic_name', 'vnet_name', 'vnet_subnet_name', 'name']);

function* commands(vm, config) {
    for (let key of Object.keys(vm)) {
        let item = vm[key];
        item.name = item.name || key;
        item.resource_group = item.resource_group || config.resource_group;
        item.location = item.location || config.location;

        if (item.tags) {

        }
        yield 'azure vm create ' + flags(item).join(' ');
    }
}

module.exports = { commands };
