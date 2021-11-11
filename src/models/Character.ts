abstract class Character {
    private name: string
    private level: number
    private loveMeter: number

    constructor(name :string){
        this.name = name
        this.level = 1
        this.loveMeter = 0
    }

    public getName() :string  {
        return this.name
    }

    public getLevel() :number  {
        return this.level
    }

    public getLoveMeter() :number  {
        return this.loveMeter
    }

    public addLevel() :void  {
        this.level += 1
    }

    public addLove(love: number) :void {
        let newTotalLove = this.loveMeter + love
        if(newTotalLove >= 100 * this.level){
            this.addLevel()
            this.loveMeter = newTotalLove - (100 * (this.level - 1))
        } else {
            this.loveMeter = newTotalLove
        }
    }
}

export default Character