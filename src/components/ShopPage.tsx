import React, { useState, useEffect } from 'react';
import './ShopPage.css'
import ItemList from './ItemList'

import Player from '../models/Player';
import Food from '../models/Food';
import Toy from '../models/Toy';

interface Props {
    player :Player
    setPlayer :(player :Player) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
}

const ShopPage = ({player, setPlayer, playerHasChanged, setPlayerHasChanged, displayedPages, setDisplayedPages} :Props) => {

    const [ toysForSale, setToysForSale ] = useState<Toy[]>([])
    const [ foodForSale, setFoodForSale ] = useState<Food[]>([])

    useEffect(() => {
        toysForSale.push(teddy)
        toysForSale.push(football)
        toysForSale.push(rubberDuck)

        foodForSale.push(pizza)
        foodForSale.push(strawberries)
        foodForSale.push(salmon)
        foodForSale.push(burger)
        foodForSale.push(burger2)
        foodForSale.push(pizza2)
        foodForSale.push(pasta2)
        foodForSale.push(pasta)
        foodForSale.push(banana)

        setToysForSale([...toysForSale])
        setFoodForSale([...foodForSale])
    }, [])

    let pizza = new Food("Pizza", "Italian", 20, 1, 10)
    let strawberries = new Food("Strawberries", "Fruit", 5, 1, 2)
    let salmon = new Food("Salmon", "Fish", 8, 2, 5)
    let burger = new Food("Burger", "Meat", 10, 1, 10)
    let burger2 = new Food("Burger", "Meat", 10, 2, 10)
    let banana = new Food("Banana", "Fruit", 12, 1, 8)
    let pasta = new Food("Pasta", "Italian", 16, 1, 14)
    let pasta2 = new Food("Pasta", "Italian", 16, 2, 14)
    let pizza2 = new Food("Pizza", "Italian", 20, 3, 10)



    let teddy = new Toy("Teddy", "Cuddly Toy", 7, 1, 3)
    let football = new Toy("Football", "Ball", 15, 1, 10)
    let rubberDuck = new Toy("Rubber Duck", "Chew Toy", 10, 1, 5)

    // const handleBuyItem = (item :Toy | Food) :void => { 
    //     if(player.buyItem(item)) {
    //         alert("Item Bought!")
    //         setPlayer({...player})
    //     }
    //     else alert("not enough money!")
    // }

    // const displayFoodsForSale = () :JSX.Element => {
    //     let foodsToDisplay = foodForSale.map(food => {
    //         return (
    //             <div className="shop-item">
    //                 <p>{food.getName()}</p>
    //                 <p>Health Recovered: {food.getTotalHealthAdded()}</p>
    //                 <p>Level: {food.getLevel()}</p>
    //                 <p>Price: {food.getTotalPrice()}</p>
    //                 <button onClick={() => handleBuyItem(food)}>BUY</button>
    //             </div>
    //         )
    //     })
    //     return (
    //         <div className="shop-item-container">
    //             {foodsToDisplay}
    //         </div>
    //     )
    // }

    // const displayToysForSale = () :JSX.Element => {
    //     let toysToDisplay = toysForSale.map(toy => {
    //         return (
    //             <div className="shop-item">
    //                 <p>{toy.getName()}</p>
    //                 <p>EXP added: {toy.getTotalExpAdded()}</p>
    //                 <p>Level: {toy.getLevel()}</p>
    //                 <p>Price: {toy.getTotalPrice()}</p>
    //                 <button onClick={() => handleBuyItem(toy)}>BUY</button>
    //             </div>
    //         )
    //     })
    //     return (
    //         <div className="shop-item-container">
    //             {toysToDisplay}
    //         </div>
    //     )
    // }

    return (
        <div>
            {!displayedPages.includes("MyItems") && <div>
                <h2>Shop</h2>
                <p>Money: {player.getMoney()} <button onClick={()=>{player.changeMoney(100); setPlayer(player); setPlayerHasChanged(!playerHasChanged)}}>ADD MONEY</button></p> {/* !!!!!!!!! */}
                {/* {player && <p>Money: {player.getMoney()} <button onClick={()=>{player.changeMoney(100); setPlayer({...player})}}>ADD MONEY</button></p>} */}
                {/* make these a spearate component */}
                {/* <div> 
                    <h3>Food For Sale</h3>
                    {displayFoodsForSale()}
                </div>
                <div>
                    <h3>Toys For Sale</h3>
                    {displayToysForSale()}
                </div> */}
                <div className="shop-item-container">
                    <h3>Food For Sale</h3>
                    <ItemList 
                        items={foodForSale}
                        player={player}
                        setPlayer={setPlayer}
                        activity={"buyFood"}
                        playerHasChanged={playerHasChanged}
                        setPlayerHasChanged={setPlayerHasChanged}
                    />
                </div>
                <div className="shop-item-container">
                    <h3>Toys For Sale</h3>
                    <ItemList 
                        items={toysForSale}
                        player={player}
                        setPlayer={setPlayer}
                        activity={"buyToys"}
                        playerHasChanged={playerHasChanged}
                        setPlayerHasChanged={setPlayerHasChanged}
                    />
                </div>
            </div>}
            <h2>My Items</h2>
            {displayedPages.includes("MyItems") && <p>Buy Items <button onClick={() => setDisplayedPages(["Shop"])}>HERE</button></p>}
            <div className="shop-item-container shop-owned">
                <h3>Owned Food</h3>
                <ItemList 
                    items={player.getFoods()}
                    player={player}
                    setPlayer={setPlayer}
                    activity={""}
                    playerHasChanged={playerHasChanged}
                    setPlayerHasChanged={setPlayerHasChanged}
                />
            </div>
            <div className="shop-item-container shop-owned">
                <h3>Owned Toys</h3>
                <ItemList 
                    items={player.getToys()}
                    player={player}
                    setPlayer={setPlayer}
                    activity={""}
                    playerHasChanged={playerHasChanged}
                    setPlayerHasChanged={setPlayerHasChanged}
                />
            </div>
        </div>
    )
}

export default ShopPage