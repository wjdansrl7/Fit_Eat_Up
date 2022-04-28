//2번째 탭 검색(Search)의 스택 내비게이션
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Result } from '../screens';

const Stack = createStackNavigator();

const SearchStack = () => {
    return(
        <Stack.Navigator  screenOptions={{  headerTitleAlign: 'center' }}>
             <Stack.Screen name="Search" component={Search} />
             <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
};

export default SearchStack;