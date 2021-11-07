import Toy from './Toy'
import Food from './Food'
import Attack from './Attack'
import Character from './Character'

class Animal extends Character { // wolf eagle tiger bear snake => have 3 of each to choose from
    private type: string
    private health: number
    private maxHealth: number
    private attack: number
    private favouriteFood: Food
    private favouriteToy: Toy
    private attacks: Attack[]
    private status: string[]

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
}

export default Animal