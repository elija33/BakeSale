import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { priceDispay } from '../Util';

 class DealItem extends Component {
     static propTypes = {
         deal: PropTypes.object.isRequired,
         onPress: PropTypes.func.isRequired,
     };
     handlePress = () => {
         this.props.onPress(this.props.deal.key);
     }
  render() {
      const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.deal} 
        onPress={this.handlePress}>
          <Image source={{ uri: deal.media[0] }} 
            style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title}>{deal.title}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>{priceDispay(deal.price)}</Text>
                <Text style={styles.cause}>{deal.cause.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },

    deal: {
        marginHorizontal: 12,
        marginTop: 12,
    },

    info: {
        paddingEnd: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    footer: {
        flexDirection: 'row',
    },

    cause:{
        flex: 2,
    },

    price: {
        flex: 1,
        textAlign: 'right',
    },
});

export default DealItem;