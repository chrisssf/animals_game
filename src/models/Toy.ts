import Item from './Item'

class Toy extends Item {
    private expAddedPerLevel: number

    constructor(name: string, type: string, expAddedPerLevel: number, level :number){
        super(name, type, level)
        this.expAddedPerLevel = expAddedPerLevel
    }

    public getExpAddedPerLevel = () :number => {
        return this.expAddedPerLevel
    }
}

export default Toy