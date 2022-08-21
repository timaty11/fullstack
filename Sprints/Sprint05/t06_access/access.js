module.exports = class Access {
    mark_LXXXV;
    
    constructor() {
        if (this.mark_LXXXV === 'null') {
            return typeof null;
        } else {
            return this.mark_LXXXV
        }
    }
}

// const Access = require('./access');

// const o = new Access;
// console.log(o.mark_LXXXV);

// o.mark_LXXXV = 'null';
// console.log(o.mark_LXXXV);

// o.mark_LXXXV = 'INCATIVE';
// console.log(o.mark_LXXXV);
