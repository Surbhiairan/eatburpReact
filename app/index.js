import React from 'react';
import RestaurantsLists from './screens/RestaurantsList'; 
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $primaryGrey: '#cbc0c0',
})

export default () => <RestaurantsLists />;
