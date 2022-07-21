import React from 'react';

// Components
import MealForm from '../meal-form/MealForm';

// Styles
import classes from './MealItem.module.css';
import { FaRupeeSign } from 'react-icons/fa';


const MealItem = (props) => {
    return (
        <li className={classes.meal}>
           <div>
                <h3> {props.name} </h3>
                <div className={classes.description}> {props.description} </div>
                <div className={classes.price}> <FaRupeeSign /> {props.price} </div>
           </div>
           <div>
               <MealForm  id={props.id} />
           </div>
        </li>
    )
}

export default MealItem;