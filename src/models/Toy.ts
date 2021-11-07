import Item from './Item'

class Toy extends Item {
    private expAddedPerLevel: number

    constructor(name: string, type: string, expAddedPerLevel: number, level :number){
        super(name, type, level)
        this.expAddedPerLevel = expAddedPerLevel
    }
}

export default Toy