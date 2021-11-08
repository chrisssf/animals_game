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
        this.money = 0
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
        console.log("here")
        if(this.money > item.getTotalPrice()){
            if(item instanceof Food) this.addFood(item)
            if(item instanceof Toy) this.addToys(item)
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

    public removeFood = (food :Food) :void => {
        let remainingFoods :Food[] = this.foods.filter(ownedFood => ownedFood.getName() !== food.getName())
        this.foods = remainingFoods
    }

    public getToys = () :Toy[] => {
        return this.toys
    }

    public addToys = (toy :Toy) :void => {
        this.toys.push(toy)
    }

    public removeToys = (toy :Toy) :void => {
        let remainingToys :Toy[] = this.toys.filter(ownedToy => ownedToy.getName() !== toy.getName())
        this.toys = remainingToys
    }
}

export default Player