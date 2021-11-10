import Animal from "./Animal"
import Character from "./Character"
import Food from "./Food"
import Toy from "./Toy"
import Item from "./Item"

class Player extends Character{
    private animals: Animal[]
    private money :number
    private foods :Food[]
    private toys :Toy[]

    constructor(name: string){
        super(name)
        this.animals = []
        this.money = 30
        this.foods = []
        this.toys = []
    }

    public getAnimals = () :Animal[] => {
        return this.animals
    }

    public addAnimal = (animal: Animal) => {
        this.animals.push(animal)
    }

    public getMoney = () :number => {
        return this.money
    }

    public changeMoney = (amount :number) :void => {
        this.money += amount
    } 

    public buyItem = (item :Item) :boolean => {
        if(this.money >= item.getTotalPrice()){
            if(item instanceof Food) this.addFood(item)
            if(item instanceof Toy) this.addToy(item)
            this.changeMoney(- item.getTotalPrice())
            return true
        }
        return false
    }

    public getFoods = () :Food[] => {
        return this.foods
    }

    public addFood = (food :Food) :void => {
        this.foods.push(food)
    }

    public removeFoodByIndex = (index :number) :void => {
        this.foods.splice(index, 1)
    }

    public removeFoodByName = (food :Food) :void => {
        let indexOfFood :number = -1
        this.foods.forEach((ownedFood, index) => {
            if(ownedFood.getName() === food.getName() && ownedFood.getLevel() === food.getLevel()) indexOfFood = index 
        })
        if(indexOfFood >= 0) this.foods.splice(indexOfFood, 1)
    }

    public getToys = () :Toy[] => {
        return this.toys
    }

    public addToy = (toy :Toy) :void => {
        this.toys.push(toy)
    }

    public removeToyByIndex = (index :number) :void => {
        this.toys.splice(index, 1)
    }

    public removeToyByName = (toy :Toy) :void => {
        let indexOfToy :number = -1
        this.toys.forEach((ownedToy, index) => {
            if(ownedToy.getName() === toy.getName() && ownedToy.getLevel() === toy.getLevel()) indexOfToy = index 
        })
        if(indexOfToy >= 0) this.toys.splice(indexOfToy, 1)
    }
}

export default Player