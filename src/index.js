const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let string = expr.substr(i, 10);
        if (string == '**********') {
            result += ' ';
        } else {       
            let stringMorse = ''
            for (let j = 0; j < string.length; j += 2) {
                let x = string.substr(j, 2);
                if (x == '10') {
                    xMorse = '.';
                } else if (x == '11') {
                    xMorse = '-';
                } else {
                    continue;
                }
                stringMorse += xMorse;
            }
            result += MORSE_TABLE[stringMorse];
        }  
    }
    return result;
}

module.exports = {
    decode
}