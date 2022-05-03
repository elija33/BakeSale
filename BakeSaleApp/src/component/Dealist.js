import React from 'react';
import PropTypes from 'prop-types'

import { View, FlatList, StyleSheet } from 'react-native';
import DealItem from './DealItem';

 class Dealist extends React.Component {
     static propTypes = {
         deals: PropTypes.array.isRequired,
         onItemPress: PropTypes.func.isRequired,
     };
  render() {
    return (
      <View style={style.list}>
          <FlatList
            data={this.props.deals}
            renderItem={({item}) => (
            <DealItem deal = {item} onPress={this.props.onItemPress} /> )}
            />
        </View>
    );
  }
}

const style = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        flex: 1,
        width: '100%',
        paddingTop: 50,
    },
});

export default Dealist;