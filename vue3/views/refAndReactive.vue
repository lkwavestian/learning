<template>
  <div class="main">
    <p>count: {{ count + 1 }}</p>
    <p>person 直接取: {{ person.age + 1 }}</p>
    <p>person 结构出来的: {{ age + 1 }}</p>
    count input：
    <input type="text" v-model="count1" />
    state.count input：

    <input type="text" v-model="state.count" />
    <p>直接取的: {{ state.count }}</p>

    <div>
      shallowRefObj.id input：
      <input type="text" v-model="shallowRefObj.id" />
      shallowRefObj.user.details.age input：
      <input type="text" v-model="shallowRefObj.user.details.age" />

      <p>shallowRefObj.id：{{ shallowRefObj.id }}</p>
      <p>shallowRefObj.user.details.age：{{ shallowRefObj.user.details.age }}</p>
    </div>

    <div>
      obj1.count input：
      <input type="text" v-model="obj1.count" />
      reactiveObj1.count input：
      <input type="text" v-model="reactiveObj1.count" />
      <p>obj1.count：{{ obj1.count }}</p>
      <p>reactiveObj1.count：{{ reactiveObj1.count }}</p>
    </div>

    <div>
      shallReactiveObj.id input：
      <input type="text" v-model="shallReactiveObj.id" />
      shallReactiveObj.user.details.age input：
      <input type="text" v-model="shallReactiveObj.user.details.age" />

      <p>shallReactiveObj.id：{{ shallReactiveObj.id }}</p>
      <p>shallReactiveObj.user.details.age：{{ shallReactiveObj.user.details.age }}</p>
    </div>

    <div>
      count2 input：
      <input type="text" v-model="count2" />
      <p>count2：{{ count2 }}</p>
    </div>

    <div>
      count3 input：
      <input type="text" v-model="count3" />
      <p>count3：{{ count3 }}</p>
    </div>

    <button @click="addCount3(state1.count)">reactive 函数结构点击</button>
    <button @click="addCount3All(state1)">reactive 函数全传入点击</button>
    <button @click="addCount3ToRefs(state1)">reactive 函数toRefs处理点击</button>

    <div>
      count4 input：
      <input type="text" v-model="count4" />
      <p>count4：{{ count4 }}</p>
    </div>

    <div>
      state3.count input：
      <input type="text" v-model="state3.count" />
      <p>state3.count：{{ state3.count }}</p>
    </div>

    <div>
      state5.count input：
      <input type="text" v-model="state5.count" />
      <p>state5.count：{{ state5.count }}</p>
    </div>

    <div>
      <p>count6：{{ count6 }}</p>
      <button @click="changeCount6">更新count6</button>
    </div>

    <div>
      <p>state6：{{ state6 }}</p>
      <button @click="changeState6">更新state6</button>
    </div>

    <div>
      <p>state7：{{ state7 }}</p>
      <button @click="changeState7">更新state7</button>
    </div>

    <div>
      <p>state8：{{ state8 }}</p>
      <button @click="changeState8">更新state8</button>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref, reactive, shallowRef, shallowReactive, watch, toRef } from 'vue';

const count = ref(0);

const person = {
  age: ref(26),
};

const state = reactive({
  count,
});

console.log('state.count === count.value', state.count === count.value);
// state.count = 1;
// console.log('count.value', count.value);

// count.value = 2;
// console.log('state.count', state.count);

const count1 = ref(2);
state.count = count1;
count.value + 1;
console.log('state.count', state.count);

const { age } = person;

const obj = ref({
  user: {
    name: 'Jack',
    details: {
      age: 18,
    },
  },
});

obj.value.user.details.age = 20; // ref具有深层响应式

const shallowRefObj = shallowRef({
  id: 1,
  user: {
    name: 'Jack',
    details: {
      age: 18,
    },
  },
});

shallowRefObj.value.user.details.age = 21;

// shallowRef 只有整个替换掉.value 时，才会触发更新
shallowRefObj.value = {
  id: 2,
  user: {
    name: 'Jack',
    details: {
      age: 18,
    },
  },
};

const obj1 = {
  count: 1,
};
// obj1.count++;
const reactiveObj1 = reactive(obj1);
reactiveObj1.count++;

const shallReactiveObj = shallowReactive({
  id: 1,
  user: {
    name: 'Jack',
    details: {
      age: 18,
    },
  },
});

shallReactiveObj.user.details.age = 21;

// reactive 对基础数据类型无效，无响应性
let count2 = reactive(0);
count2++;

let state1 = reactive(obj1);
let { count: count3 } = state1;

// 对 reactive 的结构赋值会丢失响应性
count3 = 4;

const addCount3 = (count) => {
  // 无响应性
  count++;
  console.log('count3', count3);
};

const addCount3All = (state1) => {
  // 有响应性
  state1.count++;
};

const { count: count4 } = toRefs(state1);
count4.value = 5;

let state3 = ref({
  count: 1,
});
state3.value = {
  count: 2,
};
state3 = {
  value: {
    count: 3,
  },
};

const state5 = reactive({ count: 5 });
let count5 = state5.count;
count5++; // 响应式会丢失

let count6 = ref(6);
watch(count6, (newValue, oldValue) => {
  console.log(`count6的值变化了，新值：${newValue}，旧值：${oldValue}`);
});
const changeCount6 = () => {
  count6.value++;
};

const state6 = ref({
  count: 6,
});
watch(state6, (newValue, oldValue) => {
  console.log(
    `state6的值变化了，新值：${JSON.stringify(newValue)}，旧值：${JSON.stringify(oldValue)}`
  );
});
const changeState6 = () => {
  console.log('点击了changeState6');
  state6.value.count++;
};

const state7 = ref({
  count: 7,
});
watch(state7.value, (newValue, oldValue) => {
  console.log(
    `state7的值变化了，新值：${JSON.stringify(newValue)}，旧值：${JSON.stringify(oldValue)}`
  );
});
const changeState7 = () => {
  console.log('点击了changeState7');
  state7.value.count++;
};

const state8 = reactive({
  count: 7,
});
watch(state8, (newValue, oldValue) => {
  console.log(
    `state7的值变化了，新值：${JSON.stringify(newValue)}，旧值：${JSON.stringify(oldValue)}`
  );
});
const changeState8 = () => {
  console.log('点击了changeState8');
  state8.count++;
};

const words = reactive(['a', 'b', 'c']);
const wordsRefs = toRefs(words);
console.log('wordsRefs', wordsRefs);
</script>

<style lang="scss" scoped></style>
