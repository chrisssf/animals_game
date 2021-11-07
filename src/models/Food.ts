import Item from './Item'

class Food extends Item {
    private healthAddedPerLevel: number

    constructor(name: string, type: string, healthAddedPerLevel: number, level :number){
        super(name, type, level)
        this.healthAddedPerLevel = healthAddedPerLevel
    }

}

export default Food