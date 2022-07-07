class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
    }

    sayName() {
        console.log(this.name + ` says: "My name is ` + this.name + `"`);
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }

    drinkSake() {
        console.log(this.name + " takes a sip of sake.")
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name = "sensei", wisdom = 10) {
        super(name);
        this.wisdom = wisdom
    }

    speakWisdom() {
        this.drinkSake()
        console.log(this.name + ` says: "Wise men say nothing."`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.sayName()
superSensei.speakWisdom()
superSensei.showStats()