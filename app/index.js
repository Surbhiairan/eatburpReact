import React from 'react';
import RestaurantsLists from './screens/RestaurantsList'; 
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
    $primaryGrey: '#cbc0c0',

    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
})

export default () => <Navigator />;
