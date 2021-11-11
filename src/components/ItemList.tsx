import React, { useState, useEffect, useRef } from "react";
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

    const [buttonPressed, setButtonPressed] = useState<boolean>(false)
    const myRefs :any = useRef([]); // FIX THE ANY!!!!!!!!

    const displayRemainingCooldown = (activity :Activity, index :number) =>{        
        let secondsRemaining :number = Math.floor(activity.getCooldownRemaining())
        if (secondsRemaining < 0) return
        if (secondsRemaining === 0) {
            // document.getElementById("thing" + index)!.innerText = "LOVE" 
            if(myRefs.current[index]) myRefs.current[index].innerText = "LOVE"
            return
        }
        // if(document.getElementById("thing" + index) !== null) document.getElementById("thing" + index).innerText = secondsRemaining.toString()
        // document.getElementById("thing" + index)!.innerText = "Wait " + secondsRemaining.toString() + "s" 
        if(myRefs.current[index]) myRefs.current[index].innerText = "Wait " + secondsRemaining.toString() + "s"
        setTimeout(()=> {
            displayRemainingCooldown(activity, index)
        }, 1000)
    }

    useEffect(() => {
        items.forEach((activity :Item, index :number)=>{
            if(activity instanceof Activity){
                displayRemainingCooldown(activity, index)
            }
        })
    },[buttonPressed])

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
                    {/* {item instanceof Activity && <p id={"activity" + index}></p>} */}
                    {/* would be cleaner to move these to spearate component... */}
                    {(item instanceof Toy || item instanceof Food) && activity.slice(0, 3) === "buy" && <button onClick={() => handleBuyItem(item)}>BUY</button>}
                    {giveAnimalItem && <button ref={(el) => (myRefs.current[index] = el)} id={"thing" + index} disabled={buttonsDisabled} onClick={() => {giveAnimalItem(item, index) ; setButtonPressed(!buttonPressed)}}>{activity.toUpperCase()}</button>}
                </div>
            )
        })
        return (
            <div className="item-list-container">
                {itemsToDisplay}
            </div>
        )
    }

    const handleBuyItem = (item :ShopItem) :void => {
        if(player.buyItem(item)) {
            alert("Item Bought!")
            setPlayer(player)
            setPlayerHasChanged(!playerHasChanged)
        }
        else alert("not enough money!")
    }

    return (
        <div>
            {displayItems()}
        </div>
    )
}

export default ItemList