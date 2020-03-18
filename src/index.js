module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    let library = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    let incNumb = number.toString();

    let result = '';
    let hundreds = '';

    if (incNumb.length === 3) {
        hundreds = library[incNumb[0]] + ' hundred';
        incNumb = incNumb.slice(1);
    }

    if (library[incNumb]) {
        result = hundreds + ' ' + library[incNumb];
    } else {
        if (incNumb === '00') {
            return hundreds;
        }
        let tens = library[incNumb[0]] ? library[incNumb[0] * 10] : '';
        let unit = library[incNumb[1]];

        result = (tens !== '') ? (hundreds + ' ' + tens + ' ' + unit) : (hundreds + ' ' + unit);
    }

    return result.trim();
};
