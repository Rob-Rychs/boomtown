import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const ItemCard = ({ itemData, userData })  => {

  return (
  <Card style={{ display: 'inline-block', margin: '20px 10px' }} className="single-item-card">
    <CardMedia>
      <img src={itemData.imageUrl} alt="" />
    </CardMedia>
    <CardHeader
      title={itemData.itemOwner}
      subtitle="Last seen"
      avatar="images/jsa-128.jpg"
    />

    <CardTitle title={itemData.title} subtitle={itemData.tags.toString().replace(',', ', ')} />
    <CardText>
      {itemData.description}
    </CardText>
    <CardActions>
      <RaisedButton label="Borrow" labelColor="white" backgroundColor="rgb(38, 50, 56)" />
    </CardActions>
  </Card>
);
};
export default ItemCard;
