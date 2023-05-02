import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const Chef = () => {
    
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('https://assignment10-server-mauve.vercel.app/chef/')
        .then(res=>res.json())
        .then(data=>setChefData(data))
    },[])


    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
           {
            chefData.map(item => <ChefDetails key={item.id} chefItem={item}></ChefDetails>)
           }
        </div>
    );
};

export default Chef;