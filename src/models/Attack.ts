class Attack {
    private name: string
    private type: string
    private level: number
    private additionalDamage: number
    private effect: string
    private effectChance: number

    constructor(name: string, type: string, additionalDamage: number, effect :string, effectChance :number ){
        this.name = name
        this.type = type    // speed, strong, stealth, buff/debuff
        this.level = 1
        this.additionalDamage = additionalDamage
        this.effect = effect
        this.effectChance = effectChance
    }
}

export default Attack