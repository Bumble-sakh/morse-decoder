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
  '*****': ' ',
}

function decode(expr) {
  let result = ''

  const chars = []
  for (let i = 0; i < expr.length; i += 10) {
    const char = expr.slice(i, i + 10)
    chars.push(char.length === 10 ? char : char.padStart(10, '0'))
  }

  chars.forEach((ch) => {
    let key = ''
    for (let i = 0; i < ch.length; i += 2) {
      const symbol = ch[i] + ch[i + 1]
      key +=
        symbol === '**'
          ? '*'
          : symbol === '10'
          ? '.'
          : symbol === '11'
          ? '-'
          : ''
    }
    result += MORSE_TABLE[key]
  })

  return result
}

module.exports = {
  decode,
}
