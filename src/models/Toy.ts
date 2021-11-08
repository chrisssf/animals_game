import Item from './Item'

class Toy extends Item {
    private expAddedPerLevel: number

    constructor(name: string, type: string, expAddedPerLevel: number, level :number, pricePerLevel :number){
        super(name, type, level, pricePerLevel)
        this.expAddedPerLevel = expAddedPerLevel
    }

    public getExpAddedPerLevel = () :number => {
        return this.expAddedPerLevel
    }

    public getTotalExpAdded = () :number => {
        return this.expAddedPerLevel * this.getLevel()
    }
}

export default Toy