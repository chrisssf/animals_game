import Animal from './models/Animal';
import Activity from './models/Activity';
import Snake from './models/Snake';
import Bear from './models/Bear';
import Tiger from './models/Tiger';
import Food from './models/Food';
import Toy from './models/Toy';
import Attack from './models/Attack';
import Eagle from './models/Eagle';
import Wolf from './models/Wolf'



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
let steve = new Snake("Steve", "Snake", 50, 10, banana, football, [bite])
let sally = new Snake("Sally", "Snake", 50, 10, pasta, rubberDuck, [bite])
let sarah = new Snake("Sarah", "Snake", 50, 10, pizza, teddy, [bite])
let eddie = new Eagle("Eddie", "Eagle", 40, 15, salmon, rubberDuck, [claw])
let ella = new Eagle("Ella", "Eagle", 40, 15, strawberries, teddy, [claw])
let eric = new Eagle("Eric", "Eagle", 40, 15, burger, football, [claw])
let bob = new Bear("Bob", "Bear", 50, 10, salmon, football, [claw])
let bonnie = new Bear("Bonnie", "Bear", 50, 10, strawberries, teddy, [claw])
let barry = new Bear("Barry", "Bear", 50, 10, banana, rubberDuck, [claw])
let barney = new Bear("Barney", "Bear", 50, 10, pizza, football, [claw])
let tina = new Tiger("Tina", "Tiger", 50, 10, burger, rubberDuck, [pounce])
let thomas = new Tiger("Thomas", "Tiger", 50, 10, banana, football, [pounce])
let tony = new Tiger("Tony", "Tiger", 50, 10, pasta, teddy, [pounce])
let wallace = new Wolf("Wallace", "Wolf", 50, 10, pasta, rubberDuck, [pounce])
let will = new Wolf("Will", "Wolf", 50, 10, pizza, teddy, [pounce])
let winston = new Wolf("Winston", "Wolf", 50, 10, burger, football, [pounce])
let walter = new Wolf("Walter", "Wolf", 50, 10, salmon, football, [pounce])



let allAnimals :Animal[] = []
allAnimals.push(bob)
allAnimals.push(ella)
allAnimals.push(steve)
allAnimals.push(winston)
allAnimals.push(barry)
allAnimals.push(thomas)
allAnimals.push(sarah)
allAnimals.push(walter)
allAnimals.push(tina)
allAnimals.push(barney)
allAnimals.push(eric)
allAnimals.push(sally)
allAnimals.push(eddie)
allAnimals.push(will)
allAnimals.push(tony)
allAnimals.push(bonnie)
allAnimals.push(wallace)











export default {allAnimals, toysForSale, foodForSale, activities}