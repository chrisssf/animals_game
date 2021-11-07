import Animal from "./Animal";
// import Food from "./Food";
// import Toy from "./Toy";
// import Attack from "./Attack";

class Bear extends Animal {

    // constructor(name: string, type: string, maxHealth: number, attack: number, favouriteFood: Food, favouriteToy: Toy, attacks: Attack[]){
    //     super(name, type, maxHealth, attack, favouriteFood, favouriteToy, attacks)
    // }

    public talk = () :string =>{
        return "ROAR!!!!"
    }
}

export default Bear