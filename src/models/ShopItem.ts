abstract class ShopItem {
    private name: string
    private type: string
    private level: number
    private pricePerLevel: number

    constructor(name :string, type: string, level :number, pricePerLevel :number){
        this.name = name
        this.type = type
        this.level = level
        this.pricePerLevel = pricePerLevel
    }

    public getName = () :string  => {
        return this.name
    }

    public getType = () :string => {
        return this.type
    }

    public getLevel = () :number => {
        return this.level
    }

    public getPricePerLevel = () :number => {
        return this.pricePerLevel
    }

    public getTotalPrice = () :number => {
        return (this.pricePerLevel * this.getLevel()) - (this.getLevel() - 1)
    }
}

    export default ShopItem