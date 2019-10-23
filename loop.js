  const numbers = [9, 8, 6, 1, 3, 7, 5, 9];


  'Bad Loop Code 🥀'

  let total = 0;
  const doubleNumbers = [];
  const highValue = [];
  for (i = 0; i < numbers.length; i++) {

      // Add all
      total += numbers[i];

      // Map
      doubleNumbers.push(numbers[i] * 2);

      // Filter
      if (numbers[i] > 7) {
          highValue.push(numbers[i])
      }

  }

  'Good Loop Code 🌷'

  // Add all
  const total = numbers.reduce((acc, cur) => acc + cur)

  // Map
  const doubleNumbers = numbers.map(numb => numb * 2)

  // Filter
  const highValue = numbers.filter(value => value > 7);
