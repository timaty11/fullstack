const fs = require('fs');

module.exports = class File {
    constructor(name) {
        this.name = name;
        this.dir = 'tmp';
        this.path = `${__dirname}/${this.dir}/${this.name}`;
        this.create();
    }

    create() {
        try {
            if (!fs.existsSync(`${__dirname}/${this.dir}`)) {
                fs.mkdirSync(`${__dirname}/${this.dir}`);
            }
            fs.appendFileSync(this.path, '');
        } catch (err) {
            console.error(err);
        }
    }

    read() {
        try {
            return fs.readFileSync(this.path, 'utf-8');
        } catch (err) {
            console.error(err);
        }
    }

    write(content) {
        try {
            fs.appendFileSync(this.path, content);
        } catch (err) {
            console.error(err);
        }
    }

    delete() {
        try {
            fs.unlinkSync(this.path);
        } catch (err) {
            console.error(err);
        }
    }
}