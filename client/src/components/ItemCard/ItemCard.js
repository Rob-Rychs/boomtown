import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

const ItemCard = ({ itemData })  => {

  return (
  <Card style={{ display: 'inline-block', margin: '20px 10px' }} className="single-item-card">
    <CardMedia>
      <img src={itemData.imageUrl} alt="" />
    </CardMedia>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />

    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <RaisedButton label="Borrow" />
    </CardActions>
  </Card>
);
};
export default ItemCard;
