import React, {Component} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

class RestaurantDetail extends Component{

    static navigationOptions = {
        title: 'Detail',
    }

    render(){
        return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Text>BACK TO LIST SCREEN</Text>
      </TouchableOpacity>
    );
    }
}

export default RestaurantDetail;