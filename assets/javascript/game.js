var characters = {
    name: ["Obi Wan Kenobi", "Luke Skywalker", "Darth Sidious", "Darth Maul"],
    healthPoints: [120, 100, 150, 180],
    attackPower: [8, 12, 10, 16],
    counterAttackPower: [ 10, 5, 15, 25],
    isAttacker: [false, false, false, false],
    isDefender: [false, false, false, false],
    isDefeated: [false, false, false, false]
}

for (var i = 0; i < characters.name.length; i++) {

    console.log(characters.name[i])
    console.log(characters.healthPoints[i])
    console.log(characters.attackPower[i])
    console.log(characters.counterAttackPower[i])
    console.log(characters.isAttacker[i])
    console.log(characters.isDefender[i])
    console.log(characters.isDefeated[i])

}