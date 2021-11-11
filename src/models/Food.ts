import ShopItem from './ShopItem'

class Food extends ShopItem {
    private healthAddedPerLevel: number

    constructor(name: string, level :number, pricePerLevel :number, healthAddedPerLevel: number,){
        super(name, level, pricePerLevel)
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