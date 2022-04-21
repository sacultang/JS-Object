# JS-Object
- prototype이 붙어있지 않은 메소드는 정적(static) 메소드
- 정적메소드는 {}.메소드 처럼 직접적으로 사용할 수가 없다.

## Object.assign()
- const returnedTarget = Object.assign(target, source)<br>
- target이라는 객체에다 source라는 객체를 병합해서 반환한다
- target의 중복되는 부분은 source부분으로 덮어씌워진다

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```
```js
console.log(target === returendTarget)
// true
```
같은 메모리 주소를 참조하고 있기때문에 true이다.
<br>

```js
const a = { k : 123}
const b = { k : 123}
console.log(a === b)
// false 
```
생긴건 같지만 서로 다른 메모리 주소를 참조하고 있기때문에 false이다

### 새로운 객체 데이터를 만들고 싶다면?
- 출처 객체는 여러개 작성할 수 있다.
- 첫 번째 인수로 빈 객체리터럴을 작성한다.
```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({},target, source);

console.log(target === returnedTarget)
// false
```
새로운 객체를 반환했기 때문에 target과 returnedTarget은 다른 객체이다.

## Object.keys()

- 오브젝트의 key값이 Object.keys를 통해서 key값만 추출되어 새로운 배열데이터로 만들어진다

```js
const user = {
  name: 'Oj',
  age: 85,
  email: 'sacultang@gmail.com'
}
const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']
```

- 객체데이터의 인덱싱 방법  
배열처럼 [인덱스번호]가 아닌 ['객체데이터의 프로퍼티 이름(key)']
```js
const user = {
  name: 'Oj',
  age: 85,
  email: 'sacultang@gmail.com'
}
console.log(user['email']) // 인덱싱 방법
// sacultang@gmail.com
console.log(user.email) // 점표기법
// sacultang@gmail.com
```
- 객체데이터 인덱싱 활용
```js
const user = {
  name: 'Oj',
  age: 85,
  email: 'sacultang@gmail.com'
}
const values = keys.map(key => user[key])
console.log(values)
// ['Oj', 85, 'sacultang@gmail.com']

```