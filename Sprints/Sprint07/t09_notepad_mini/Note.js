module.exports = class Note {
    constructor(name, text, importance) {
        this.date = this.correctDate();
        this.name = name;
        this.importance = importance;
        this.text = text;
    }

    correctDate() {
        const CurrDate = new Date();
        const result = [`${CurrDate.getFullYear()}-`,
            `${(CurrDate.getMonth() + 1) > 9 ? (CurrDate.getMonth() + 1) : '0' + (CurrDate.getMonth() + 1)}-`,
            `${CurrDate.getDate() > 9 ? CurrDate.getDate() : '0' + CurrDate.getDate()} `,
            `${CurrDate.getHours() > 9 ? CurrDate.getHours() : '0' + CurrDate.getHours()}:`,
            `${CurrDate.getMinutes() > 9 ? CurrDate.getMinutes() : '0' + CurrDate.getMinutes()}:`,
            `${CurrDate.getSeconds() > 9 ? CurrDate.getSeconds() : '0' + CurrDate.getSeconds()}`
            ].join('');
        return result;
    }
}