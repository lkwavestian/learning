// 定义一个类

class UserBase {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }
}

class User extends UserBase {
    getName() {
        console.log(this.name);
    }
}

interface People extends User {
    age: number
}

// 通过 new 这个类得到的变量，它的类型就是这个类
const petter2: User = new User('Petter');
petter2.getName(); // Petter
