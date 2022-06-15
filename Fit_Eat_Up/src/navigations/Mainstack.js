// 로그인한 후에 나오는 화면들

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import { PlaceDetail } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator >
            <Stack.Screen name="Main" component={MainTab} options={{headerShown: false}}/>
            <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
        </Stack.Navigator>
    );
};

export default MainStack;