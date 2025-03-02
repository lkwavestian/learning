function sum1(x:number, y:number):number {
    return x + y
}

const sum2 = function(x:number, y:number):number {
    return x + y
}

const sum3 = (x:number, y:number, z?:number):number => {
    return x + y + z
}

const sayHi = (text: string):void => {
    console.log('sayHi')
}

const promiseText = ():Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World')
        }, 1000);
    })
}

// 函数本身类型
const sum:(x:number, y:number) => number = (x:number, y:number):number => {
    return x + y
}

interface Obj {

    // 表示函数的类型：参数接收x、y，返回number
    sum:(x:number, y:number) => number
}

const objText:Obj = {
    sum:(x:number, y:number) => {
        // return String(x)
        return x + y
    }
}

// 函数的重载
function greet(name: string): string  // TS 类型
function greet(name: string[]): string[]  // TS 类型
function greet(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}

// 单个问候语，此时只有一个类型 string
const greeting = greet('Petter')
console.log(greeting) // Welcome, Petter!

// 多个问候语，此时只有一个类型 string[]
const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)
// [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]