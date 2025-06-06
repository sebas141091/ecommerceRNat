
import Info from '../screen/info'
import Product from '../screen/products'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text } from 'react-native'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    tabBarStyle:
                        { height: 70, backgroundColor: 'grey' },
                    tabBarLabelStyle: {
                        fontSize: 20,
                        color: "white"
                    }
                }
            }>
            <Tab.Screen
                options={
                    {
                        tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'black', fontSize: 20 }}>Info</Text>),
                        tabBarIcon: ({ focused }) => (<Icon name='storefront' size={32} color={focused ? 'white' : 'black'} />)

                    }
                }
                name="Product"
                component={Product} />
            <Tab.Screen
                options={
                    {
                        tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'black', fontSize: 20 }}>Info</Text>),
                        tabBarIcon: ({ focused }) => (<Icon name='person' size={32} color={focused ? 'white' : 'black'} />)

                    }
                }
                name="Info" component={Info} />
        </Tab.Navigator>

    )
}

export default TabNavigator;