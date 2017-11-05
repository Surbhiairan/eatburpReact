import {StackNavigator} from 'react-navigation';

import RestaurantsList from '../screens/RestaurantsList';
import RestaurantDetail from '../screens/RestaurantDetail';

export default StackNavigator({
    RestaurantsList: {
        screen: RestaurantsList,
        navigationOptions: {
            header: () => null,
        },
    },
    RestaurantDetail: {
        screen: RestaurantDetail,
    },
});