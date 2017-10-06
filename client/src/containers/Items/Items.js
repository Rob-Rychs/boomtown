import React, {
  Component
} from 'react';
import ItemCardList from '../../components/ItemCardList/ItemCardList';

class Items extends Component {
  constructor(props) {
      super(props);

      this.state = {
          itemData: []
      };
  }

  componentDidMount() {
      fetch('http://localhost:3001/items')
          .then(response => response.json())
          .then(data => {
              this.setState({
                  itemData: data,
              });
          // console.log(this.state);
          // console.log(this.state.itemData);
          })
}

render() {
  return ( 
      <ItemCardList
          itemData={this.state.itemData}
      />
  );
}
}

export default Items;