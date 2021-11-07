abstract class Item {
    private name: string
    private type: string
    private level: number

    constructor(name :string, type: string, level :number){
        this.name = name
        this.type = type
        this.level = level
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
}

    export default Item