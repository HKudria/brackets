module.exports = function check(str, bracketsConfig) {
    const length = str.length
    for (let i = 0; i <= length; i++) {
        for (const config of bracketsConfig) {
            let strConfig = config.join('')
            str = str.replace(strConfig,'')
        }
    }
   return !str
}
