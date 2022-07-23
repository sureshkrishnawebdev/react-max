import React from 'react';
import { useParams } from 'react-router-dom';

// Styles
import classes from './Category.module.css'
import Card from '../../UI/card/Card';

const Category = () => {

    const params = useParams();
    console.log( params );

    return (
        <Card>
           <div className={classes.category}>
                <h3> {JSON.stringify(params)} </h3>
           </div>
        </Card>
    )
}

export default Category;