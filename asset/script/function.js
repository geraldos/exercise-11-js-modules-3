function transformText(str) {
    let regexTest = /[A-Z]/g;

    if (str.match(regexTest)) {
        return str.toLowerCase();
    } else {
        return str.toUpperCase();
    }
}

export default transformText