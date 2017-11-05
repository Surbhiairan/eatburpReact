import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { Container } from "../components/Container";
import {Logo} from  '../components/Logo';
import restaurants from '../data/restaurants';

const RestaurantsList = () => (
    <View style={{ flex:1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
        data = {restaurants}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
    />
    </View>
    
);

export default RestaurantsList;
