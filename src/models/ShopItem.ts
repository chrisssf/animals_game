import Item from './Item'

// love items / activties ===> pet, cuddle, nap with, brush, wash / clean, 

abstract class ShopItem extends Item {
    private pricePerLevel :number

    constructor(name: string, level :number, pricePerLevel :number){
        super(name, level)
        this.pricePerLevel = pricePerLevel

    }

    public getPricePerLevel() :number {
        return this.pricePerLevel
    }

    public getTotalPrice() :number {
        return (this.pricePerLevel * this.getLevel()) - (this.getLevel() - 1)
    }
}

export default ShopItem