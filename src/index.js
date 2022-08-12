const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let strLenBig = 10;
	let strLenSmall = 2;
	let arr = [];
	let subItem = 0;

	for (let i = 0; i < expr.length; i += strLenBig) {
		arr.push(expr.slice(i, i + strLenBig));
	}

	arr = arr.map(function (item, index, array) {
		if (item === '*'.repeat(strLenBig)) {
			item = ' ';
			return item;
		}
		else {
			subItem = +item;
			subItem = String(subItem);
			item = [];

			for (let i = 0; i < subItem.length; i += strLenSmall) {
				item.push(subItem.slice(i, i + strLenSmall));
			}
			item = item.map(function (item2, index, array) {
				if (item2 % 10 === 0) {
					item2 = '.';
				}
				else {
					item2 = '-';
				}
				return item2;
			})

			item = item.join('');
			return item;
		}
	})
	console.log(arr);
}

module.exports = {
	decode
}