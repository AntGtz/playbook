const hero = {
    name: "Cyclops",
    teamUp: function(team){
      console.log(`${this.name} helps ${team}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  hero.teamUp("Wolverine")