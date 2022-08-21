let houseMixin = {
  wordReplace(oldW, newW) {
    this.description = this.description.replace(oldW, newW);
  },
  wordInsertAfter(oldW, newW) {
    this.description = this.description.replace(oldW, oldW + " " + newW);
  },
  wordDelete(word) {
    this.description = this.description.replace(word, '');
  },
  wordEncrypt() {
    this.description = this.rot13(this.description);
  },
  wordDecrypt() {
    this.description = this.rot13(this.description);
  },
  rot13(s) {
    return (s ? s : this).split('').map(function(str) {
      if (!str.match(/[A-Za-z]/)) {
        return str;
      }
      
      cymb = Math.floor(str.charCodeAt(0) / 97);
      klon = (str.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
      return String.fromCharCode(klon + ((cymb == 0) ? 64 : 96));

    }).join('');
  }
}
