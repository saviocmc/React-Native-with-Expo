import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Cart from './views/Cart';
import Services from './views/Services';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Serviços' component={Services} />
                <Tab.Screen name='Carrinho' component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}