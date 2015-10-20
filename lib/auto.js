"use strict";

function fieldFlagFunc(args) {
    let fields = {};
    for (let arg of args) {
        fields[arg] = '--' + arg.replace('_', '-');
    }
    return (item) => {
        let flags = [];
        for (let key of Object.keys(fields)) {
            let value = item[key];
            if (typeof value === 'undefined') continue;
            flags.push(fields[key]);
            if (typeof value === 'string') {
                flags.push(`"${value}"`);
            } else if (value !== true) {
                flags.push(value);
            }
        }
        return flags;
    };
}

module.exports = { fieldFlagFunc };