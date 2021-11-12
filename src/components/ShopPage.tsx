import React, { useState, useEffect } from 'react';
import './ShopPage.css'
import SeedData from '../SeedData';
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

// instead of showing player items at bottom could have number owned beside buy button!!!!!!!!!!!!!!

const ShopPage = ({player, setPlayer, playerHasChanged, setPlayerHasChanged, displayedPages, setDisplayedPages} :Props) => {

    const [ toysForSale, setToysForSale ] = useState<Toy[]>(SeedData.toysForSale)
    const [ foodForSale, setFoodForSale ] = useState<Food[]>(SeedData.foodForSale)
    

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
    //                 <p>Love added: {toy.getTotalLoveAdded()}</p>
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
                        task={"buyFood"}
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
                        task={"buyToys"}
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
                    task={""}
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
                    task={""}
                    playerHasChanged={playerHasChanged}
                    setPlayerHasChanged={setPlayerHasChanged}
                />
            </div>
        </div>
    )
}

export default ShopPage