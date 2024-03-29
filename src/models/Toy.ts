import ShopItem from './ShopItem'

class Toy extends ShopItem {
    private loveAddedPerLevel: number

    constructor(name: string, level :number, pricePerLevel :number, loveAddedPerLevel: number){
        super(name, level, pricePerLevel)
        this.loveAddedPerLevel = loveAddedPerLevel
    }

    public getLoveAddedPerLevel = () :number => {
        return this.loveAddedPerLevel
    }

    public getTotalLoveAdded = () :number => {
        return this.loveAddedPerLevel * this.getLevel()
    }
}

export default Toy