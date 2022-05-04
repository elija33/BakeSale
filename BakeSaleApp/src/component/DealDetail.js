import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { priceDispay } from '../Util';
import ajax from './ajax';

 class DealDetail extends Component {
     static propTypes = {
         initialDealData: PropTypes.object.isRequired,
         onBack: PropTypes.func.isRequired,
     };
     state = {
         deal: this.props.initialDealData,
     };
     async componentDidMount() {
         const fullDeal = await ajax.fetchDealsDetail(this.state.deal.key);
         this.setState({
             deal: fullDeal,
         });
     }
  render() {
      const { deal } = this.state;
    return (
      <View style={styles.deal}>
          <TouchableOpacity onPress={this.props.onBack}>
              <Text style={styles.backLink}>Back</Text>
          </TouchableOpacity>
          <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View style={styles.detail}>
            <View>
                <Text style={styles.title}>{deal.title}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.info}>
                    <Text style={styles.price}>{priceDispay(deal.price)}</Text>
                    <Text style={styles.cause}>{deal.cause.name}</Text>
                </View>
            {deal.user && ( 
                <View style={styles.user}>
                    <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
                    <Text>{deal.user.name}</Text>
                </View>
            )}
        </View>
        <View style={styles.description}>
          <Text>{deal.description}</Text>
      </View>
    </View>
</View>
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
        marginTop: 50,
    },

    info: {
        paddingEnd: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },

    backLink: {
        marginBottom: 5,
        color: '#22f',
    },

    detail: {
        borderColor: '#bbb',
        borderWidth: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'rgba(237, 149, 45, 0.4)',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    cause:{
        flex: 2,
    },

    price: {
        flex: 1,
        textAlign: 'right',
    },

    avatar: {
        width: 60,
        height: 60,
    }
});

export default DealDetail;