const encoder = new TextEncoder();

/**
 * Indicates start of integers
 */
const TOKEN_INTEGER = encoder.encode('i')[0];

/**
 * Indicates start of list
*/
const TOKEN_LIST = encoder.encode('l')[0];

/**
 * Indicates start of dict
*/
const TOKEN_DICT = encoder.encode('d')[0];

/**
 * Indicate end of lists, dicts and integer values
*/
const TOKEN_END = encoder.encode('e')[0];

/**
 * Delimits string length from string data
*/
const TOKEN_STRING_SEPARATOR = encoder.encode(':')[0];

/**
 * 
*/
const TOKEN_DIGIT_SEPARATOR = encoder.encode('0123456789');

export const Tokens = {
    integer: TOKEN_INTEGER,
    list: TOKEN_LIST,
    dict: TOKEN_DICT,
    end: TOKEN_END,
    strSeparator: TOKEN_STRING_SEPARATOR,
    digits: TOKEN_DIGIT_SEPARATOR
}