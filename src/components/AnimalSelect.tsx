import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Animal from '../models/Animal';
import Food from '../models/Food';
import Toy from '../models/Toy';
import Attack from '../models/Attack';

const AnimalSelect = () => {

    let meat = new Food("Meat", "Meat", 1, 20)
    let teddy = new Toy("Teddy", "Cuddly Toy", 1, 10)
    let bite = new Attack("Bite", "Speed", 10, "bleeding", 10)
    let steve = new Animal("Steve", "Snake", 50, 10, meat, teddy, [bite])
    console.log(steve);
        

    return (
        <div>
            <h2>Animal Select</h2>
            <p>Name: {steve.getName()}</p>
            <p>Favorite Food: {steve.getFavouriteFood().getName()}</p>
        </div>
    )
}

export default AnimalSelect