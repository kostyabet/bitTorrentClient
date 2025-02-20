import { Tokens } from "./tokens";
const encoder = new TextEncoder();

/**
 * Decodes a bencoded sequence of bytes.
*/
export class Decoder {

    private _index: number;
    private _data: Int8Array;

    /**
     * @data file info Int8Array data
    */
    constructor(data: Int8Array) {
        this._index = 0;
        this._data = data;
    }

    /**
     * Decodes the bencoded data and return the matching python object.
     * 
     * @returns An object representing the bencoded data.
    */
    decode() {
        const char = this.peek();
        
        if (Tokens.digits.includes(char))
            return this.decodeString();

        switch (char) {
            case (Tokens.integer): {
                this.consume();
                return this.decodeInt();
            }
            case (Tokens.list): {
                this.consume();
                return this.decodeList();
            }
            case (Tokens.dict): {
                this.consume();
                return this.decodeDict();
            }
            case (Tokens.end): {
                return NaN;
            }
            default:
                throw new Error("Unexpected end-of-file")
        }
    }

    /**
     * Return the next character from the bencoded data or None.
    */
    peek() : number {
        if (this._index >= this._data.length)
            return NaN;
        return this._data[this._index]
    }

    /**
     * Read (and therefore consume) the next character from the data.
    */
    consume() {
        this._index++;
    }

    /**
     * Read the `length` number of bytes from data and return the result.
     * 
     * @length number of bytes.
    */
    read(length: number) : Int8Array {
        if (this._index + length > this._data.length)
            throw new Error(`Cannot read ${length} bytes from current position ${this._index}!`);
        const data = this._data.subarray(this._index, this._index + length);
        this._index += length;
        return data;
    }

    /**
     * Read from the bencoded data until the given token is found and return the characters read. 
     * 
     * @tokens stop token.
    */
    readUntil(token: number) : number {
        let num : number = 0;
        do {
            num = num * 10 + (this.peek() - encoder.encode('0')[0]);
            this.consume();
        } while (this.peek() != token)
        this.consume();
        return num;
    }
    
    decodeInt() : number {
        return this.readUntil(Tokens.end)
    }

    decodeList() {

    }

    decodeDict() {

    }

    decodeString() {
        const bytesToRead = this.readUntil(Tokens.strSeparator);
        const data = this.read(bytesToRead);
        return data;
    }
}