import React from "react";
import './ItemList.css'

import Player from "../models/Player";
import Item from "../models/Item";
import Toy from '../models/Toy'
import Food from '../models/Food'

interface Props {
    items :Toy[] | Food[]
    player :Player
    setPlayer :(player :Player) => void
    activity :string
    giveAnimalItem? :(item :Item, itemIndex: number) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
}

const ItemList = ({items, player, setPlayer, activity, giveAnimalItem, playerHasChanged, setPlayerHasChanged} :Props) => {

    const handleBuyItem = (item :Toy | Food) :void => {
        if(player.buyItem(item)) {
            alert("Item Bought!")
            setPlayer(player)
            setPlayerHasChanged(!playerHasChanged)
            // setPlayer({...player})
        }
        else alert("not enough money!")
    }

    const displayItems = () :JSX.Element => {
        let itemsToDisplay :JSX.Element[] = items.map((item, index) => {
            return (
                <div className="item-list-element" key={index}>
                    <p>{item.getName()}</p>
                    {item instanceof Toy && <p>EXP added: {item.getTotalExpAdded()}</p>}
                    {item instanceof Food && <p>Health Recovered: {item.getTotalHealthAdded()}</p>}
                    <p>Level: {item.getLevel()}</p>
                    <p>Price: {item.getTotalPrice()}</p>
                    {/* would be cleaner to move these to spearate component... */}
                    {activity.slice(0, 3) === "buy" && <button onClick={() => handleBuyItem(item)}>BUY</button>}
                    {giveAnimalItem && <button onClick={() => giveAnimalItem(item, index)}>{activity.toUpperCase()}</button>}
                </div>
            )
        })
        return (
            <div className="item-list-container">
                {itemsToDisplay}
            </div>
        )
    }

    return (
        <div>
            <p>Item List</p>
                {displayItems()}
        </div>
    )
}

export default ItemList