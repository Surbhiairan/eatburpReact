import React, {Component} from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { Container } from "../components/Container";
import {Logo} from  '../components/Logo';
import restaurants from '../data/restaurants';
import { ListItem, Separator} from '../components/List';

const TEMP_CURRENT_CURRENCY= 'CAD';
class RestaurantsList extends Component {
    
    handlePress = () => {
        console.log('row press');
    };

    render() {
        return (
            <View style={{ flex:1 }}>
            <StatusBar barStyle="default" translucent={false} />
            <FlatList
                data = {restaurants}
                renderItem={({item}) => (
                <ListItem 
                    text={item}
                    selected = { item == TEMP_CURRENT_CURRENCY}
                    onPress={this.handlePress}
                />
                )}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={Separator}
            />
            </View>
        )
    }
}

export default RestaurantsList;
