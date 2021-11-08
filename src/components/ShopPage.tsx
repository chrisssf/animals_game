import React, { useState, useEffect } from 'react';
// import './ShopPage.css'

import Food from '../models/Food';
import Toy from '../models/Toy';

interface Props {
    player :any
    setPlayer :(player :any) => void
}

const ShopPage = ({player, setPlayer} :Props) => {

    const [ toysForSale, setToysForSale ] = useState<Toy[]>([])
    const [ foodForSale, setFoodForSale ] = useState<Food[]>([])

    useEffect(() => {
        toysForSale.push(teddy)
        toysForSale.push(football)
        toysForSale.push(rubberDuck)

        foodForSale.push(mouse)
        foodForSale.push(blueberries)
        foodForSale.push(salmon)
        foodForSale.push(burger)
        foodForSale.push(burger2)

        setToysForSale([...toysForSale])
        setFoodForSale([...foodForSale])
    }, [])

    let mouse = new Food("Mouse", "Meat", 20, 1, 10)
    let blueberries = new Food("Blueberries", "Berry", 5, 1, 2)
    let salmon = new Food("Salmon", "Fish", 8, 2, 5)
    let burger = new Food("Burger", "Meat", 10, 1, 10)
    let burger2 = new Food("Burger", "Meat", 10, 2, 10)

    let teddy = new Toy("Teddy", "Cuddly Toy", 7, 1, 3)
    let football = new Toy("Football", "Ball", 15, 1, 10)
    let rubberDuck = new Toy("Rubber Duck", "Chew Toy", 10, 1, 5)

    const handleBuyItem = (item :Toy | Food) :void => {
        // console.log("thing", player.buyItem(item))
        if(player.buyItem(item)) {
            alert("Item Bought!")
            setPlayer({...player})
        }
        else alert("not enough money!")
    }

    const displayFoodsForSale = () :JSX.Element => {
        let foodsToDisplay = foodForSale.map(food => {
            return (
                <div>
                    <p>{food.getName()}</p>
                    <p>Health Recovered: {food.getTotalHealthAdded()}</p>
                    <p>Level: {food.getLevel()}</p>
                    <p>Price: {food.getTotalPrice()}</p>
                    <button onClick={() => handleBuyItem(food)}>BUY</button>

                </div>
            )
        })
        return (
            <div>
                {foodsToDisplay}
            </div>
        )
    }

    const displayToysForSale = () :JSX.Element => {
        let toysToDisplay = toysForSale.map(toy => {
            return (
                <div>
                    <p>{toy.getName()}</p>
                    <p>EXP added: {toy.getTotalExpAdded()}</p>
                    <p>Level: {toy.getLevel()}</p>
                    <p>Price: {toy.getTotalPrice()}</p>
                    <button onClick={() => handleBuyItem(toy)}>BUY</button>
                </div>
            )
        })
        return (
            <div>
                {toysToDisplay}
            </div>
        )
    }

    return (
        <div>
            <h2>Shop</h2>
            {player && <p>Money: {player.getMoney()} <button onClick={()=>player.changeMoney(100)}>ADD MONEY</button></p>}
            <div>
                <h3>Food For Sale</h3>
                {displayFoodsForSale()}
            </div>
            <div>
                <h3>Toys For Sale</h3>
                {displayToysForSale()}
            </div>
        </div>
    )
}

export default ShopPage