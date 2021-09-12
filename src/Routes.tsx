import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { colors } from './styles';
import Cart from './views/Cart';
import Services from './views/Services';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.purple,
                    tabBarActiveBackgroundColor: colors.purple,
                    tabBarInactiveTintColor: colors.light,
                    tabBarInactiveBackgroundColor: colors.orange,
                    tabBarStyle: {
                        height: 70,
                    },
                    tabBarLabelStyle: {
                        width: '100%',
                        flex: 1,
                        marginTop: 3,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        textAlignVertical: 'center',
                        backgroundColor: colors.orange,
                    },
                    tabBarIconStyle: {
                        opacity: 0,
                        maxHeight: 0,
                    },
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                }}
            >
                <Tab.Screen name='Serviços' component={Services} />
                <Tab.Screen name='Carrinho' component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}