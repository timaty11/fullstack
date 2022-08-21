class Comment {
    constructor(date = new Date(), comment) {
        this.date = date;
        this.comment = comment;
    }
}

module.exports = Comment;