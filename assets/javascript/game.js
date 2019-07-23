var characters = {
    name: ["Obi Wan Kenobi", "Luke Skywalker", "Darth Sidious", "Darth Maul"],
    nameDestination: ["#character-1-name", "#character-2-name", "#character-3-name", "#character-4-name"],
    imageSource: ["assets/images/obi-wan-kenobi.jpg", "assets/images/luke-skywalker.jpg", "assets/images/darth-sidious.jpg", "assets/images/darth-maul.jpg"],
    charImageDestination: ["#character-1-picture", "#character-2-picture", "#character-3-picture", "#character-4-picture"],
    healthPoints: [120, 100, 150, 180],
    healthPointsDestination: ["#character-1-hp", "#character-2-hp", "#character-3-hp", "#character-4-hp"],
    attackPower: [8, 12, 10, 16],
    counterAttackPower: [ 10, 5, 15, 25],
    isAttacker: [false, false, false, false],
    isDefender: [false, false, false, false],
    isDefeated: [false, false, false, false]
}

var enemies = {
    nameDestination: ["#enemies-1-name", "#enemies-2-name", "#enemies-3-name"],
    imageDestination: ["#enemies-1-picture", "#enemies-2-picture", "#enemies-3-picture",],
    healthPointsDestination: ["#enemies-1-hp", "#enemies-2-hp", "#enemies-3-hp"],
}

var attackerHealthPoints = 0;
var defenderHealthPoints = 0;
var defenderCount = 3;
var decrementer = 0;

$("#your-character").hide();
$(".enemies").hide();

for (var i = 0; i < characters.name.length; i++) {

    // For each iteration, we will create an imageCrystal
    var charImage = $("<img>");

    // First each crystal will be given the class ".crystal-image card-img-top".
    charImage.addClass("picture character-choice");

    // Each imageCrystal will be given a src link to the crystal image
    charImage.attr("src", characters.imageSource[i]);

    charImage.attr("name", characters.name[i]);

    charImage.attr("health-points", characters.healthPoints[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(characters.charImageDestination[i]).html(charImage);

    $(characters.nameDestination[i]).text(characters.name[i]);
    $(characters.healthPointsDestination[i]).text(characters.healthPoints[i]);

}

$(".character-choice").on("click", function() {
    // console.log("Working");

    $("#your-character").show();
    $(".enemies").show();

    if (this.name === "Obi Wan Kenobi") {
        characters.isAttacker[0] = true;
    }

    if (this.name === "Luke Skywalker") {
        characters.isAttacker[1] = true;
    }

    if (this.name === "Darth Sidious") {
        characters.isAttacker[2] = true;
    }

    if (this.name === "Darth Maul") {
        characters.isAttacker[3] = true;
    }
    console.log(this);
    $("#choose-a-character").empty();


    for (var i = 0; i < characters.name.length; i++) {

        if (characters.isAttacker[i] === true) {

            decrementer = 1;

            attackerHealthPoints = characters.healthPoints[i];

            // For each iteration, we will create an imageCrystal
            var charImage = $("<img>");

            // First each crystal will be given the class ".crystal-image card-img-top".
            charImage.addClass("picture character-choice");

            // Each imageCrystal will be given a src link to the crystal image
            charImage.attr("src", characters.imageSource[i]);

            charImage.attr("name", characters.name[i]);

            charImage.attr("health-points", characters.healthPoints[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#attacker-picture").html(charImage);

            $("#attacker-name").text(characters.name[i]);
            $("#attacker-hp").text(characters.healthPoints[i]);

        } else {

            // For each iteration, we will create an imageCrystal
            var charImage = $("<img>");

            // First each crystal will be given the class ".crystal-image card-img-top".
            charImage.addClass("picture enemies-choice");

            // Each imageCrystal will be given a src link to the crystal image
            charImage.attr("src", characters.imageSource[i]);

            charImage.attr("name", characters.name[i]);

            charImage.attr("health-points", characters.healthPoints[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $(enemies.imageDestination[i-decrementer]).html(charImage);

            $(enemies.nameDestination[i-decrementer]).text(characters.name[i]);
            $(enemies.healthPointsDestination[i-decrementer]).text(characters.healthPoints[i]);  
                
        }

        $(".enemies-choice").on("click", function() {
            console.log("Working");
        
            $("#your-character").show();
            $(".enemies").show();
        
            if (this.name === "Obi Wan Kenobi") {
                characters.isDefender[0] = true;
                console.log("Obi");
            }
        
            if (this.name === "Luke Skywalker") {
                characters.isDefender[1] = true;
                console.log("Luke");
            }
        
            if (this.name === "Darth Sidious") {
                characters.isDefender[2] = true;
                console.log("Sidious");
            }
        
            if (this.name === "Darth Maul") {
                characters.isDefender[3] = true;
                console.log("Maul");
            }

        });

    }    

});   
