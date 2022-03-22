import React, { useState } from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';

const Cosmetic = (props) => {

    // Destructuring
    const { name, price, id } = props.cosmetic2;

    


    const style = {
        backgroundColor: 'cyan',
        margin: "40px",
        padding: '20px',
        border:'4px solid gray',
        borderRadius:'10px'
    }


    const addToCart = () => {
        addToDb(id);
    }
    const removeFromcart = () => {
        removeFromDb(id)
    }


    // this func is calling the addToCart func included with parameter
    const addToCartWithParam = () => {
     addToCart(id)   
    }


    return (
        <div>
            
            <p style={style}>
                {name}
                <br />
                Price:{price}
                <br />
                <small>id:{id}</small>
                
                <br />
                <button onClick={addToCartWithParam}>Add to cart</button>
                <br />
                <button onClick={() => addToCart(id)}>Add to cart:Shortcut</button>
                <button onClick={()=> removeFromcart()}>Remove</button>
            </p>
            
        </div>
    );
};

export default Cosmetic;