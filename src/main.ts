import { Encoder } from "./beencoding/encoder"

console.log(new Encoder('Hello').encode());
/* 
    Uint8Array(7) [
        53,  58,  72, 101,
        108, 108, 111
    ]
*/

console.log(new Encoder(123).encode());
/* 
    Uint8Array(5) [ 105, 49, 50, 51, 101 ]
*/

console.log(new Encoder(['123123', 123, '123']).encode());
/* 
    Uint8Array(20) [
        108, 54,  58, 49, 50,  51,  49,
        50, 51, 105, 49, 50,  51, 101,
        51, 58,  49, 50, 51, 101
    ]
*/

console.log(new Encoder(new Map<any,any>([
    ['hello', 'hello'],
    ['hello', 'hello'],
])).encode());
/* 
    Uint8Array(16) [
        100,  53,  58, 104, 101,
        108, 108, 111,  53,  58,
        104, 101, 108, 108, 111,
        101
    ]
*/