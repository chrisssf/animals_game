import Animal from "./Animal"
import Character from "./Character"

class Player extends Character{
    private animals: Animal[]

    constructor(name: string){
        super(name)
        this.animals = []
    }

    public getAnimals = () => {
        return this.animals
    }

    public addAnimal = (animal: Animal) => {
        this.animals.push(animal)
    }
}

export default Player