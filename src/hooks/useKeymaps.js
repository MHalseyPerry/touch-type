import { useMemo } from 'react';

export const useKeymaps = () =>
  useMemo(
    () => ({
      rus: {
        81: 'Й',
        87: 'Ц',
        69: 'У',
        82: 'К',
        84: 'Е',
        89: 'Н',
        85: 'Г',
        73: 'Ш',
        79: 'Щ',
        80: 'З',
        219: 'Х',
        221: 'Ъ',
        65: 'Ф',
        83: 'Ы',
        68: 'В',
        70: 'А',
        71: 'П',
        72: 'Р',
        74: 'О',
        75: 'Л',
        76: 'Д',
        186: 'Ж',
        192: 'Э',
        90: 'Я',
        88: 'Ч',
        67: 'С',
        86: 'М',
        66: 'И',
        78: 'Т',
        77: 'Ь',
        188: 'Б',
        190: 'Ю',
      },

      eng: {
        81: 'Q',
        87: 'W',
        69: 'E',
        82: 'R',
        84: 'T',
        89: 'Y',
        85: 'U',
        73: 'I',
        79: 'O',
        80: 'P',
        219: '[',
        221: ']',
        65: 'A',
        83: 'S',
        68: 'D',
        70: 'F',
        71: 'G',
        72: 'H',
        74: 'J',
        75: 'K',
        76: 'L',
        186: ';',
        192: "'",
        90: 'Z',
        88: 'X',
        67: 'C',
        86: 'V',
        66: 'B',
        78: 'N',
        77: 'M',
        188: ',',
        190: '.',
      },
    }),
    [],
  );