function CallName(name, surname) {
    const fullName = `${name} ${surname}`.toUpperCase()
    const totalCharacters = fullName.length
    return {
        fullName, totalCharacters
    }
}

console.log(CallName(`roberto`, `gonzales`))
console.log(CallName(`ana`, `martinez`))
console.log(CallName(`carlos`, `perez`))