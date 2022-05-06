import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, PanResponder, Animated, StyleSheet } from 'react-native';

import { priceDispay } from '../Util';
import ajax from './ajax';

 class DealDetail extends Component {
     imagePanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gs) => {

        },
        onPanResponderRelease: (evt, ga) => {

        }

     });
     static propTypes = {
         initialDealData: PropTypes.object.isRequired,
         onBack: PropTypes.func.isRequired,
     };
     state = {
         deal: this.props.initialDealData,
         imageIndex: 0,
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
          <Image 
            {...this.imagePanResponder.panHandlers} 
            source={{ uri: deal.media[this.state.imageIndex] }} 
            style={styles.image} />
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

    info: {
        alignItems: 'center',
    },

    backLink: {
        marginBottom: 5,
        color: '#22f',
        marginLeft: 10,
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
        marginTop: '15',
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
    },

   vuser: {
    alignItems: 'center',
  },
});

export default DealDetail;