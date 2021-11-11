import Toy from './Toy'
import Food from './Food'
import Attack from './Attack'
import Character from './Character'
import Activity from './Activity'

abstract class Animal extends Character { // wolf eagle tiger bear snake => have 3 of each to choose from!!!
    private type: string
    private health: number
    private maxHealth: number
    private attack: number
    private favouriteFood: Food
    private favouriteToy: Toy
    private attacks: Attack[]
    private status: string[]
    // extensions for later, add happiness meter and hunger meter!!!

    constructor(name: string, type: string, maxHealth: number, attack: number, favouriteFood: Food, favouriteToy: Toy, attacks: Attack[]){
        super(name)
        this.type = type
        this.health = maxHealth
        this.maxHealth = maxHealth
        this.attack = attack
        this.favouriteFood = favouriteFood
        this.favouriteToy = favouriteToy
        this.attacks = attacks
        this.status = []
    }

    public getType = ():string => {
        return this.type
    }

    public getHealth = ():number => {
        return this.health
    }

    public getMaxHealth = ():number => {
        return this.maxHealth
    }

    public getAttack = ():number => {
        return this.attack
    }

    public getFavouriteFood = ():Food => {
        return this.favouriteFood
    }

    public getFavouriteToy = ():Toy => {
        return this.favouriteToy
    }

    public getAttacks = ():Attack[] => {
        return this.attacks
    }

    public takeDamage = (damage: number): void => {
        this.health -= damage
        if(this.health < 0 ) this.health = 0
    }

    public addHealth = (healthToAdd :number) :void => {
        this.health += healthToAdd
        if(this.health > this.maxHealth) this.health = this.maxHealth
    }

    public eat = (food :Food) :void => {
        let foodLevel :number = food.getLevel()
        let amountHealedByFood :number = foodLevel * food.getHealthAddedPerLevel()
        if(food.getName() === this.favouriteFood.getName()) amountHealedByFood *= 1.5
        this.addHealth(amountHealedByFood)
    }

    public play = (toy :Toy) :void => {
        let toyLevel :number = toy.getLevel()
        let loveGainedByToy :number = toyLevel * toy.getLoveAddedPerLevel()
        if(toy.getName() === this.favouriteToy.getName()) loveGainedByToy *= 1.5
        this.addLove(loveGainedByToy)
    }

    public doActivity = (activity :Activity) :void => {
        if(activity.isOffCooldown()) {
            let activityLevel = activity.getLevel()
            let loveGainedByActivity :number = activityLevel * activity.getLoveAddedPerLevel()
            this.addLove(loveGainedByActivity)
            activity.startActivity()
        }
    }

    abstract talk() :string
 }

export default Animal