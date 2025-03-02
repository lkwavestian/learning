// src/ts/index.ts
function getFirstWord(msg: string) {
  console.log(msg.split(' ')[0]);
}

getFirstWord('Hello World');

//   getFirstWord(123)

const strArr: string[] = ['1'];

const strArr2: Array<string> = ['aa'];

interface UserItem {
  name: string;
  age?: number;
  friends?: UserItem[];
}

// interface Admin extends UserItem {
//   permissionLevel:number
// }

interface Admin extends Omit<UserItem, 'name' | 'friends'> {
  permissionLevel: number
}

const petter: UserItem = {
  name: 'petter',
  friends: [{
    name: 'Jack'
  }]
};

const superAdmin: Admin = {
  permissionLevel: 1
}