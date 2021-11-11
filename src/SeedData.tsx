import Animal from './models/Animal';
import Snake from './models/Snake';
import Bear from './models/Bear';
import Tiger from './models/Tiger';
import Food from './models/Food';
import Toy from './models/Toy';
import Attack from './models/Attack';

let pizza = new Food("Pizza", 1, 20, 10)
let strawberries = new Food("Strawberries", 1, 5, 2)
let salmon = new Food("Salmon", 2, 8, 6)
let burger = new Food("Burger", 1, 10, 10)
let burger2 = new Food("Burger", 2, 10, 10)

let teddy = new Toy("Teddy", 1, 7, 4)
let football = new Toy("Football", 1, 15, 10)
let rubberDuck = new Toy("Rubber Duck", 1, 10, 6)

let bite = new Attack("Bite", "Speed", 15, "Poision", 20)
let claw = new Attack("Claw", "Power", 25, "Bleeding", 10)
let pounce = new Attack("Pounce", "Stealth", 10, "Incapacitate", 30)

let steve = new Snake("Steve", "Snake", 50, 10, pizza, teddy, [bite])
let bob = new Bear("Bob", "Bear", 50, 10, salmon, football, [claw])
let tina = new Tiger("Tina", "Tiger", 50, 10, burger, rubberDuck, [pounce])
let allAnimals :Animal[] = []
allAnimals.push(steve)
allAnimals.push(bob)
allAnimals.push(tina)

export default {allAnimals}