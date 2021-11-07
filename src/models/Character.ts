abstract class Character {
    private name: string
    private level: number
    private currentExp: number

    constructor(name :string){
        this.name = name
        this.level = 1
        this.currentExp = 0
    }

    public getName = ():string => {
        return this.name
    }

    public getLevel = ():number => {
        return this.level
    }

    public getCurrentExp = ():number => {
        return this.currentExp
    }

    public addExp = (exp: number):void => {
        let newTotalExp = this.currentExp + exp
        if(newTotalExp >= 100){
            this.level += 1
            this.currentExp = newTotalExp - 100
        } else {
            this.currentExp = newTotalExp
        }
    }
}

export default Character