/*

POKE.JS


*/


/********************Types Array********************/

const types = ["Normal", "Fire", "Water", "Grass", "Poison"];



/********************Moves: objects********************/

const tackle = {
    name: "Tackle",
    type: null,
    damage: 50,
    heal: null
}

const surf = {
    name: "Surf",
    type: types[1],
    damage: 70,
    heal: null
}

const rain = {
    name: "Rain",
    type: types[1],
    damage: null,
    heal: 40
}

const flamethrower = {
    name: "Flamethrower",
    type: types[0],
    damage: 75,
    heal: 0
}

const aerialstrike = {
    name: "Aerial Strike",
    type: types[3],
    damage: 60,
    heal: 0
}


/********************POKEDEX ARRAYS********************/
const national = [];

const kanto = [];

const johto = [];


/********************Class Templates********************/

class Pokemon {

    //Contructor for Pokemon class
    constructor(name, type, hp, attk, def, pokedex) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attk = attk;
        this.def = def;
        this.moves = [];

        this.pokedex = pokedex;


        //Add Pokemon object to their Pokedex when constructed
        this.addToPD = function() { this.pokedex.push(this); };  
        this.addToPD();
    }


    //view the Pokemon's current move set
    viewMoves(){
        for(let [index, move] of this.moves.entries()){
            console.log("\t"+`${index + 1} - ${move.name}`);
        }
    }

    //View the stats of the pokemon
    viewStats(){
        console.log(`${this.name.toUpperCase()}'S STATS`);
        console.log(`\tHP: ${this.hp}`);
        console.log(`\tTYPE: ${this.type}`);
        console.log(`\tATTK: ${this.attack}`);
        console.log(`\tDEF: ${this.defense}`);

        console.log("MOVES");
        this.viewMoves();
    }


    attack(){


        console.log("Select a move:");
        this.viewMoves();

        
    }


  }




//Testing Pokemon class
let bulbasaur = new Pokemon('Bulbasaur', types[3], 45, 49, 49, kanto);


bulbasaur.moves.push(tackle, surf);











/*

function viewTeam (team){

    console.log("\tHERE ARE YOUR POKEMON!");
    console.log("-----------------------------");

    for(let pokemon of team){
        console.log(`Slot: ${team.indexOf(pokemon) + 1} - ${pokemon.name}`);
        console.log("STATS");
        console.log(`\tHP: ${pokemon.hp}`);
        console.log(`\tTYPE: ${pokemon.type}`);
        console.log(`\tATTK: ${pokemon.attack}`);
        console.log(`\tDEF: ${pokemon.defense}`);
        console.log("MOVES");
        
        for(let move of pokemon.moves){
            console.log(`\t${move.name}`);
        }
    
        console.log("---------------------------------------------------");
    
    }
    
}



function attack(attacking, defending, move){

    if(move.damage > 0){
        console.log(`${attacking.name} is attacking ${defending.name}!`);
        console.log(`${attacking.name} used ${move.name} on ${defending.name}!`);
        console.log(`${move.name} did ${move.damage} damage!`);
        defending.hp -= move.damage;
        console.log(`${defending.name} now has ${defending.hp}`);
    }

    if(move.heal > 0){
        console.log(`${attacking.name} used ${move.name} to heal itself!`);
        console.log(`${attacking.name} gained ${move.heal} HP!`);
    }

}


const test = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, curr) => acc + curr);

const test2 = ['1', '2', '3', '4'];


const pokedex = (...pokemon) => {
    yourPok = [];
    return yourPok.push(...pokemon);
}


const [first, second, third] = test2;


*/