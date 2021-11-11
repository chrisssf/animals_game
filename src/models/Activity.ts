import LoveItem from './LoveItem'

class Activity extends LoveItem {
    private cooldown :number
    private lastUsed :number
    private usageMeter :number

    constructor(name: string, loveAddedPerLevel: number, cooldown :number){
        super(name, loveAddedPerLevel, 1)
        this.cooldown = cooldown
        this.lastUsed = 0
        this.usageMeter = 0
    }

    public getCooldown() :number  {
        return this.cooldown
    }

    public getLastUsed() :number {
        return this.lastUsed
    }

    public getCooldownRemaining() :number {
        let usableAtInMS :number = this.lastUsed + (this.cooldown * 1000)
        let differenceInMS :number = usableAtInMS - Date.now()
        return differenceInMS / 1000
    }

    public isOffCooldown() :boolean {
        return (this.lastUsed + (this.cooldown * 1000) < Date.now())
    }

    public startActivity() {
        this.lastUsed = Date.now()
        this.increaseUsageMeter()
    }

    public increaseUsageMeter() {
        if(this.usageMeter + 1 === 10){
            this.usageMeter = 0
            this.increaseLevel()
        } else {
            this.usageMeter += 1
        }
    }
 
}

export default Activity

