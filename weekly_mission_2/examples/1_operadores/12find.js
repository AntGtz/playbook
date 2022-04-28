const scores12 = [
    { name: 'A', score: 5 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 15 },
    { name: 'J', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score > 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)