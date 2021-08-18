function arrayPushFunc (arr) {
    const resultArr = [...arr]
    return resultArr.push('and then this')
}

module.exports = arrayPushFunc;