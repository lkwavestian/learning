// 对单人或者多人打招呼
function greet(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
      return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
  }
  
  // 虽然已知此时应该是 string[]
  // 但 TypeScript 还是会认为这是 string | string[]
  const greetings2 = greet(['Petter', 'Tom', 'Jimmy']) as string[]
  
  // 会导致无法使用 join 方法
  const greetingSentence = greetings2.join(' ')
  console.log(greetingSentence)