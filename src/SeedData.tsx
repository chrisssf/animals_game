import Animal from './models/Animal';
import Activity from './models/Activity';
import Snake from './models/Snake';
import Bear from './models/Bear';
import Tiger from './models/Tiger';
import Food from './models/Food';
import Toy from './models/Toy';
import Attack from './models/Attack';



// making Food instances
let pizza = new Food("Pizza", 1, 20, 10)
let strawberries = new Food("Strawberries", 1, 5, 2)
let salmon = new Food("Salmon", 2, 8, 6)
let burger = new Food("Burger", 1, 10, 10)
let burger2 = new Food("Burger", 2, 10, 10)
let banana = new Food("Banana", 1, 12, 8)
let pasta = new Food("Pasta", 1, 16, 14)
let pasta2 = new Food("Pasta", 2, 16, 14)
let pizza2 = new Food("Pizza", 3, 20, 10)

let foodForSale :Food[] = []
foodForSale.push(pizza)
foodForSale.push(strawberries)
foodForSale.push(salmon)
foodForSale.push(burger)
foodForSale.push(burger2)
foodForSale.push(pizza2)
foodForSale.push(pasta2)
foodForSale.push(pasta)
foodForSale.push(banana)



// making Toy instances
let teddy = new Toy("Teddy", 1, 7, 4)
let football = new Toy("Football", 1, 15, 10)
let rubberDuck = new Toy("Rubber Duck", 1, 10, 6)

let toysForSale :Toy[] = []
toysForSale.push(teddy)
toysForSale.push(football)
toysForSale.push(rubberDuck)



// making Activity instances
const cuddle = new Activity("Cuddle", 50, 30)
const pet = new Activity("Pet", 15, 5)
const nap = new Activity("Nap With", 60, 60)
const wash = new Activity("Wash", 30, 60)
const talk = new Activity("Talk", 10, 2)

let activities :Activity[] = []
activities.push(talk)
activities.push(pet)
activities.push(cuddle)
activities.push(nap)
activities.push(wash)



// making Attack instances
let bite = new Attack("Bite", "Speed", 15, "Poision", 20)
let claw = new Attack("Claw", "Power", 25, "Bleeding", 10)
let pounce = new Attack("Pounce", "Stealth", 10, "Incapacitate", 30)



// making Animal instances
let steve = new Snake("Steve", "Snake", 50, 10, pizza, teddy, [bite])
let bob = new Bear("Bob", "Bear", 50, 10, salmon, football, [claw])
let tina = new Tiger("Tina", "Tiger", 50, 10, burger, rubberDuck, [pounce])

let allAnimals :Animal[] = []
allAnimals.push(steve)
allAnimals.push(bob)
allAnimals.push(tina)




export default {allAnimals, toysForSale, foodForSale, activities}