import { Decoder } from '../src/beencoding/decoder'
const encoder = new TextEncoder();

describe('Decode check', () => {
    test('Try to parse integer.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('i123e'))).decode()).toBe(123);
    });

    test('Try to parse string.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('12:Middle Earth'))).decode()).toStrictEqual(new Int8Array(encoder.encode('Middle Earth')));
    });
});