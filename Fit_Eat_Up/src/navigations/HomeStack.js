import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, WithSearch } from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={{  headerTitleAlign: 'center' }}>
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="WithSearch" component={WithSearch} />
        </Stack.Navigator>
    );
};

export default HomeStack;