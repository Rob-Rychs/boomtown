import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemCardList = ({ itemData }) => {
    console.log(itemData);
    return (
        <div>
            { itemData.map((item) => (
                <ItemCard itemData={item} key={item.id} />
        )) }
        </div>
    );
};

export default ItemCardList;
