  const myFruit  = { name: 'pineapple 🍍', amount: 70, availability: true }
  const hisFruit  = { name: 'coconut 🥥', amount: 0, availability: false }
  const herFruit  = { name: 'avocado 🥑', amount: 3, availability: true }

    'Bad Code 🥀'
  console.log(myFruit)
  console.log(hisFruit)
  console.log(herFruit)

    'Good Code 🌷'
  console.log({myFruit, hisFruit, herFruit})

  // Console.table(...)
  console.table([myFruit, hisFruit, herFruit])
