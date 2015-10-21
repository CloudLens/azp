"use strict";
const child_process = require('child_process');

function defaultSubscriptionId() {
    var json;
    try {
        json = child_process.execSync('azure account list --json', {timeout: 5000, encoding: 'utf8'});
    }
    catch (err) {
        console.log(err);
        return null;
    }
    let accounts = JSON.parse(json);
    let defaultAccount = accounts.filter((acc) => acc.isDefault === true)[0];
    return defaultAccount ? defaultAccount.id : null;
}

module.exports = { defaultSubscriptionId };
