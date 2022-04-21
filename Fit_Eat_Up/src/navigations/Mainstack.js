// 로그인한 후에 나오는 화면들

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import { Personal, Recommend, With, Memo } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainTab} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="Recommend" component={Recommend} />
            <Stack.Screen name="With" component={With} />
            <Stack.Screen name="Memo" component={Memo} />
        </Stack.Navigator>
    );
};

export default MainStack;