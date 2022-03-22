import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=> setCosmetics(data))
    },[])
    
    return (
        <div>
            <h2>Welcome to our store</h2>
            {/* this is one way to send collection of data to another comp */}
            {/* {
                cosmetics.map(cosmetic=> <Cosmetic name={cosmetic.name} key={cosmetic.id} />)
            }  */}

            {/* Another way is to send the whole individual obj */}
            {
                cosmetics.map(cosmetic2 => <Cosmetic
                    key={cosmetic2.id}
                    cosmetic2={cosmetic2}
                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;