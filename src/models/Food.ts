import Item from './Item'

class Food extends Item {
    private healthAddedPerLevel: number

    constructor(name: string, type: string, healthAddedPerLevel: number, level :number, pricePerLevel :number){
        super(name, type, level, pricePerLevel)
        this.healthAddedPerLevel = healthAddedPerLevel
    }

    public getHealthAddedPerLevel = () :number => {
        return this.healthAddedPerLevel
    }

    public getTotalHealthAdded = () :number => {
        return this.healthAddedPerLevel * this.getLevel()
    }

}

export default Food