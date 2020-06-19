function transformText(str) {
    let strArr = str.split("")
    let doneStr = strArr.map((characterr) => {
        if (/[a-z]/.test(characterr)) {
            characterr = characterr.toUpperCase()
        } else {
            characterr = characterr.toLowerCase()
        }
        return characterr
    })
    return doneStr.join("");
}

export default transformText