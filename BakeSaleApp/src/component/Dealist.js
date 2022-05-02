import React from 'react';
import PropTypes from 'prop-types'

import { View, Text, FlatList, StyleSheet } from 'react-native';

 class Dealist extends React.Component {
     static propTypes = {
         deals: PropTypes.array.isRequired,
     }
  render() {
    return (
      <View style={Styles.list}>
          <FlatList
            data={this.props.deals}
            renderItem={({item}) => <Text>{item.title}</Text>}/> 
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