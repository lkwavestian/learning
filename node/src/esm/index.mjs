// import a from './module.mjs'
// console.log(a)

// import {foo} from './module.mjs'

// import {foo,bar} from './module.mjs'

// foo()
// console.log(bar)

// import * as m from './module.mjs'
// m.foo()
// console.log(m.bar)

import { foo as foo2, bar } from './module.mjs'
foo2()
console.log(bar)