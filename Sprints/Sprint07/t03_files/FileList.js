const fs = require('fs');

module.exports = class FileList {
    constructor() {
        this.dir = 'tmp';
        if (!fs.existsSync(`${__dirname}/${this.dir}`)) {
            fs.mkdirSync(`${__dirname}/${this.dir}`);
        }
    }

    getList() {
        let files = new Array();
        fs.readdirSync(`${__dirname}/${this.dir}`).forEach(file => {
            files.push(file);
        });
        return files;
    }

    hasFiles() {
        return this.getList().length > 0;
    }

    getHTMLList() {
        let result = '<ul>';
        this.getList().forEach(file => {
            result += `<li><a href="/select-file?file=${file}">${file}</a></li>`;
        });
        result += '</ul>';
        return result;
    }

    getListForTemplate() {
        let result = new Array();
        for (let file of this.getList()) {
            result.push(`<li><a href="/${file}">${file}</a></li>`);
        }
        return result;
    }
}