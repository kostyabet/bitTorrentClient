import { Encoder } from "./beencoding/encoder"

console.log(new Encoder('Hello').encode());
console.log(new Encoder(123).encode());
console.log(new Encoder(['123123', 123, '123']).encode());
console.log(new Encoder(new Map<any,any>([
    ['hello', 'hello'],
    ['hello', 'hello'],
])).encode());