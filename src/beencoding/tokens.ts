const encoder = new TextEncoder();

/**
 * Indicates start of integers
 */
const TOKEN_INTEGER = new Uint8Array(encoder.encode('i'));

/**
 * Indicates start of list
*/
const TOKEN_LIST = new Uint8Array(encoder.encode('l'));

/**
 * Indicates start of dict
*/
const TOKEN_DICT = new Uint8Array(encoder.encode('d'));

/**
 * Indicate end of lists, dicts and integer values
*/
const TOKEN_END = new Uint8Array(encoder.encode('e'));

/**
 * Delimits string length from string data
*/
const TOKEN_STRING_SEPARATOR = new Uint8Array(encoder.encode(':'));

export const Tokens = {
    integer: TOKEN_INTEGER,
    list: TOKEN_LIST,
    dict: TOKEN_DICT,
    end: TOKEN_END,
    strSeparator: TOKEN_STRING_SEPARATOR
}