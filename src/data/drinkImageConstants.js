export const drinkImageConstants = {
  cup: ['M 10 65 H 90 L 75 190 H 25 Z', 'M 10 45 H 90 L 75 190 H 25 Z'],
  straw: [
    ['M 2 25 L 60 190 L 65 187 L 7 22 Z', 'M 6 25 L 60 190 L 65 188 L 13 23 Z'], // leaning left
    ['M 98 25 L 40 190 L 35 187 L 93 22 Z', 'M 94 25 L 40 190 L 35 188 L 87 23 Z'], // leaning right
  ],
  milk: ['M 15 95 H 85 L 83 115 H 17 Z', 'M 13 75 H 87 L 84 100 H 16 Z'],
  tea: ['M 15 95 H 85 L 75 190 H 25 Z', 'M 15 80 H 85 L 75 190 H 25 Z'],
  teaColor: ['rgba(196,180,154,0.9)', 'rgba(154,146,88,0.9)'],
  ice: [
    [
      'M 18 96 L 33 93 L 36 109 L 22 112 Z', // regular half
      'M 42 93 L 57 97 L 52 112 L 38 108 Z',
      'M 62 97 L 77 95 L 78 109 L 64 111 Z',
      'M 28 112 L 44 111 L 45 127 L 29 128 Z', // regular full
      'M 54 110 L 70 113 L 66 128 L 50 125 Z',
    ],
    [
      'M 38 76 L 53 73 L 56 89 L 42 92 Z', // large half
      'M 22 73 L 37 77 L 32 92 L 18 88 Z',
      'M 62 75 L 77 77 L 75 91 L 60 89 Z',
      'M 52 91 L 68 91 L 67 108 L 51 107 Z', // large half
      'M 26 100 L 37 88 L 48 98 L 38 109 Z',
    ],
  ],
  topping: {
    pearls: [
      [30, 185],
      [37, 184],
      [33, 178],
      [44, 185],
      [48, 179],
      [51, 186],
      [55, 180],
      [40, 178],
      [59, 186],
      [63, 178],
      [65, 184],
      [70, 187],
      [71, 180],
      [27, 174],
      [35, 172],
      [45, 172],
      [53, 173],
      [60, 171],
      [68, 173],
      [74, 169],
      [26, 167],
      [33, 165],
      [40, 166],
      [49, 167],
      [56, 165],
      [65, 167],
      [27, 160], // this and below large only
      [38, 159],
      [45, 161],
      [52, 159],
      [62, 160],
      [71, 161],
    ],
    coconutJelly: [
      [25, 162],
      [27, 183],
      [33, 176],
      [35, 169],
      [40, 183],
      [45, 163],
      [47, 177],
      [50, 170],
      [59, 162],
      [61, 183],
      [63, 176],
      [64, 169],
      [23, 155], // this and below large only
      [38, 156],
      [51, 154],
    ],
    coconutJellySlanted: [
      'M 24 170 L 31 169 L 33 180 L 26 181 Z',
      'M 64 154 L 69 151 L 77 162 L 72 165 Z', // large only
    ],
  },
};