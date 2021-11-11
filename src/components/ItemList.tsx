import React from "react";
import './ItemList.css'

import Player from "../models/Player";
import Item from "../models/Item";
import Toy from '../models/Toy'
import Food from '../models/Food'
import ShopItem from "../models/ShopItem";
import Activity from "../models/Activity";

interface Props {
    items :Item[]
    player :Player
    setPlayer :(player :Player) => void
    activity :string
    giveAnimalItem? :(item :Item, itemIndex: number) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
    buttonsDisabled? :boolean
}

const ItemList = ({
    items, 
    player, 
    setPlayer, 
    activity, 
    giveAnimalItem, 
    playerHasChanged, 
    setPlayerHasChanged,
    buttonsDisabled,
} :Props) => {

    const handleBuyItem = (item :ShopItem) :void => {
        if(player.buyItem(item)) {
            alert("Item Bought!")
            setPlayer(player)
            setPlayerHasChanged(!playerHasChanged)
        }
        else alert("not enough money!")
    }

    const displayRemainingCooldown = (activity :Activity, index :number) =>{
        let secondsRemaining :number = Math.floor(activity.getCooldownRemaining())
        if (secondsRemaining < 0) return
        if (secondsRemaining === 0) {
            // document.getElementById("thing" + index)!.innerText = "LOVE" NEED THIS BACK!!!!!!!!!!!!!!!!!!!!!
            return
        }
        // if(document.getElementById("thing" + index) !== null) document.getElementById("thing" + index).innerText = secondsRemaining.toString()
        // document.getElementById("thing" + index)!.innerText = "Wait " + secondsRemaining.toString() + "s" NEED THIS BACK!!!!!!!!!!!!!!!!!!!!!
        setTimeout(()=> {
            displayRemainingCooldown(activity, index)
        }, 1000)
    }

    

    const displayItems = () :JSX.Element => {
        let itemsToDisplay :JSX.Element[] = items.map((item, index) => {
            return (
                <div className="item-list-element" key={index}>
                    <h4>{item.getName()}</h4>
                    {(item instanceof Toy || item instanceof Activity) && <p>Love Meter: +{item.getTotalLoveAdded()}</p>}
                    {item instanceof Food && <p>Health: +{item.getTotalHealthAdded()}</p>}
                    <p>Level: {item.getLevel()}</p>
                    {item instanceof ShopItem && <p>Price: {item.getTotalPrice()}</p>}
                    {item instanceof Activity && <p>Cooldown: {item.getCooldown()}s</p>}
                    {item instanceof Activity && displayRemainingCooldown(item, index)}
                    {/* {item instanceof Activity && <p id={"thing" + index}></p>} */}
                    {/* would be cleaner to move these to spearate component... */}
                    {(item instanceof Toy || item instanceof Food) && activity.slice(0, 3) === "buy" && <button onClick={() => handleBuyItem(item)}>BUY</button>}
                    {giveAnimalItem && <button id={"thing" + index} disabled={buttonsDisabled} onClick={() => giveAnimalItem(item, index)}>{activity.toUpperCase()}</button>}
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
            {displayItems()}
        </div>
    )
}

export default ItemList