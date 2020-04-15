import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { navigate } from '../../utils/navigationService';

function RenderItem({ item, handleMinus, handlePlus, carItems, handleCart }) {
  const { id } = item;
  const itemAdded = carItems[id]
  return (
    <View style={styles.itemContainer}>
      <View style={styles.rowContainer}>
        <Text>{item.name} : Price {item.price}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text>{item.description}</Text>
      </View>
      <View style={[styles.rowContainer, styles.addItem]}>
        <TouchableOpacity onPress={() => !itemAdded || itemAdded === 0 ? undefined : handleMinus(id)}>
          <Image
            source={require('./../../assets/images/minus.png')}
            style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.itemCount}> {itemAdded || 0}</Text>
        <TouchableOpacity onPress={() => handlePlus(id)}>
          <Image
            source={require('./../../assets/images/plus.png')}
            style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => !itemAdded || itemAdded === 0 ? undefined : handleCart(id)}><Text>Add to cart</Text></TouchableOpacity>
      </View>
    </View>
  );
}

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carItems: {}
    };
  }
  componentDidMount() {
    this.props.getDispatchItems();
  }

  handleCartPage = () => {
    navigate('Cart', {
      carItems: this.state.carItems
    });
  };

  handleMinus = (id) => {
    const { carItems } = this.state;
    if (id in carItems) {
      carItems[id] -= 1;
    } else {
      carItems[id] = 1;
    }
    this.setState({ carItems })
  }

  handlePlus = (id) => {
    const { carItems } = this.state;
    if (id in carItems) {
      carItems[id] += 1;
    } else {
      carItems[id] = 1;
    }
    this.setState({ carItems })
  }

  handleCart = (id) => {
    const { carItems } = this.state;
    const { items, cartData } = this.props;
    const foundIndex = cartData.findIndex(c => c.id == id);
    let data = items[id - 1];
    data.quantity = carItems[id];

    if (foundIndex > 0) {
      cartData[foundIndex] = data;
    } else {
      cartData.push(data);
    }
    this.props.setCartData(cartData);
  }

  render() {
    const { items } = this.props;
    const { carItems } = this.state;
    return (
      <View style={styles.container}>
        <Text>Listing Page</Text>
        <TouchableOpacity onPress={this.handleCartPage}>
          <Text>Click here to go cart page. Cart Total: {Object.keys(carItems).length}</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            extraData={items}
            renderItem={({ item }) => <RenderItem item={item} handleMinus={this.handleMinus} handlePlus={this.handlePlus} carItems={carItems} handleCart={this.handleCart} />}
            keyExtractor={item => item._id}
            ListEmptyComponent={<View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No data available</Text>
            </View>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  emptyContainer: {
    paddingVertical: 50
  },
  emptyText: {
    color: '#878585',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemContainer: {
    height: 100,
    backgroundColor: '#F9ED32',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addItem: {
    justifyContent: 'space-evenly',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  itemCount: {
    width: 50,
    height: 30,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});

export default Listing;
