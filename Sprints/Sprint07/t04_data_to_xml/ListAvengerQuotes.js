const fs = require('fs');
const xml = require('xml2js');
const Comment = require('./Comment');
const AvengerQuote = require('./AvengerQuote');

class ListAvengerQuotes {
    constructor(data) {
        this.xmlData = '';
        this.data = this.init(data);
    }

    init(data) {
        let newObj = Object.assign(new AvengerQuote(), data);
        const { id, author, quote, publishDate, photo, comments, ...new_res } = newObj;
        let res = Object.values(new_res);
        res = res.map((quote) => quote = { quote });
        return res;
    }

    toXML() {
        let builder = new xml.Builder();
        this.xmlData = builder.buildObject(this.data);
        try {
            fs.writeFileSync(`${__dirname}/avenger_quote.xml`, this.xmlData);
        } catch (err) {
            console.error(err);
        }
    }

    fromXML() {
        try {
            this.xmlData = fs.readFileSync(`${__dirname}/avenger_quote.xml`, 'utf-8');
        } catch (err) {
            console.error(err);
        }
        return this.xmlData;
    }
}

module.exports = ListAvengerQuotes;