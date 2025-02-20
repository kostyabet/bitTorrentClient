import { Decoder } from "./beencoding/decoder"
const encoder = new TextEncoder();

const decoder = new Decoder(new Int8Array(encoder.encode('12:Middle Earth')));
console.log(decoder.decode())