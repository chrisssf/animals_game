import Animal from "./Animal";
// import Food from "./Food";
// import Toy from "./Toy";
// import Attack from "./Attack";

class Snake extends Animal {

    // constructor(name: string, type: string, maxHealth: number, attack: number, favouriteFood: Food, favouriteToy: Toy, attacks: Attack[]){
    //     super(name, type, maxHealth, attack, favouriteFood, favouriteToy, attacks)
    // }

    public talk = () :string =>{
        return "SSSS..."
    }
}

export default Snake