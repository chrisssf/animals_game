abstract class Item {
    private name: string
    private level: number

    constructor(name :string, level :number){
        this.name = name
        this.level = level
    }

    public getName() :string  {
        return this.name
    }

    public getLevel() :number {
        return this.level
    }

    public increaseLevel() {
        this.level += 1
    }

   
}

    export default Item