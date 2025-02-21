import { Encoder } from "./beencoding/encoder"

new Encoder('Hello').encode();
new Encoder(123).encode();
new Encoder(['123123', 123, '123']).encode();
new Encoder(new Map<any,any>([
    ['hello', 'hello'],
])).encode();