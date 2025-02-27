// module.exports = 'Hello World'

// module.exports = function foo(params) {
//     console.log('Hello World')
// }

function foo() {
    console.log('Hello World from foo')
}

const bar = 'Hello World from bar'

module.exports = {
    foo,
    bar
}