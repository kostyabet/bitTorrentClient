import { Decoder } from '../src/beencoding/decoder'
const encoder = new TextEncoder();

describe('Decode check', () => {
    test('Try to parse integer.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('i123e'))).decode()).toBe(123);
    });

    test('Try to parse string.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('12:Middle Earth'))).decode()).toStrictEqual(new Int8Array(encoder.encode('Middle Earth')));
    });

    test('Try to parse list.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('l4:spam4:eggsi123ee'))).decode()).toBe([
            [ 115, 112, 97, 109 ],
            [ 101, 103, 103, 115 ],
            123
        ]);
    });

    test('Try to parse dictionary.', () => {
        expect(new Decoder(new Int8Array(encoder.encode('d3:cow3:moo4:spam4:eggse'))).decode()).toStrictEqual(new Map<any, any>([
            [[ 99, 111, 119 ], [ 109, 111, 111 ]],
            [[ 115, 112, 97, 109 ], [ 101, 103, 103, 115] ]
        ]));
    });    
});