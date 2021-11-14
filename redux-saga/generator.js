function* sayHiGenerator() {
    yield 'hey'
    return 'hi'
}

const resultGenerator = sayHiGenerator()
console.log(resultGenerator.next())


function* newGenerator(){
    yield 'something'
    const final = yield 'give me value'
    return final
}