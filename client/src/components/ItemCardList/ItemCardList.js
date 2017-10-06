import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemCardList = ({ itemData, userData }) => {
    console.log(itemData, userData);
    return (
        <div>
            { itemData.map((item) => (
                <ItemCard itemData={item} userData={userData} key={item.id} />
        )) }
        </div>
    );
};

export default ItemCardList;
