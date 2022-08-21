class anon {
    constructor(name, alias, affiliation) {
        this.name = name;
        this.alias = alias;
        this.affiliation = affiliation;
    }
}


module.exports.getAnonymous = (name, alias, affiliation) => {
    return new anon(name, alias, affiliation);
}



// const i = require('./index');

// const dayn = i.getAnonymous('Unknown', 'Mandarin', 'Ten Rings');

// console.log([
//     dayn.name,
//     dayn.alias,
//     dayn.affiliation,
// ].join('\n'));
