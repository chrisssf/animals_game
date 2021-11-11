import Item from './Item'

abstract class LoveItem extends Item {
    private loveAddedPerLevel: number

    constructor(name: string, loveAddedPerLevel: number, level :number){
        super(name, level)
        this.loveAddedPerLevel = loveAddedPerLevel
    }

    public getLoveAddedPerLevel = () :number => {
        return this.loveAddedPerLevel
    }

    public getTotalLoveAdded = () :number => {
        return this.loveAddedPerLevel * this.getLevel()
    }
}

export default LoveItem
