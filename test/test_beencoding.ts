import { Decoder } from '../src/beencoding/decoder'
import { Encoder } from '../src/beencoding/encoder';
const encoder = new TextEncoder();

describe('Decode check', () => {
    test('Try to parse integer.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('i123e'))).decode()).toBe(123);
    });

    test('Try to parse string.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('12:Middle Earth'))).decode()).toStrictEqual('Middle Earth');
    });

    test('Try to parse list.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('l4:spam4:eggsi123ee'))).decode()).toStrictEqual(['spam', 'eggs', 123]);
    });

    test('Try to parse dictionary.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('d3:cow3:moo4:spam4:eggse'))).decode()).toStrictEqual(new Map<any, any>([
            ['cow', 'moo'],
            ['spam', 'eggs']
        ]));
    });    
});

describe('Encode check', () => {
    test('Try to parse integer.', () => {
        expect(new Encoder(123).encode()).toStrictEqual(new Uint8Array([105, 49, 50, 51, 101]));
    });

    test('Try to parse string.', () => {
        expect(new Encoder('Hello').encode()).toStrictEqual(new Uint8Array([53, 58, 72, 101, 108, 108, 111]));
    });

    test('Try to parse list.', () => {
        expect(new Encoder(['123123', 123, '123']).encode()).toStrictEqual(
            new Uint8Array([ 108, 54,  58, 49, 50,  51,  49,
                50, 51, 105, 49, 50,  51, 101,
                51, 58,  49, 50, 51, 101 ]),
        );
    });

    test('Try to parse dictionary.', () => {
        expect(new Encoder(new Map<any,any>([
            ['hello', 'hello'],
            ['hello', 'hello'],
        ])).encode()).toStrictEqual(
            new Uint8Array([
                100,  53,  58, 104, 101,
                108, 108, 111,  53,  58,
                104, 101, 108, 108, 111,
                101
            ])
        );
    });
});