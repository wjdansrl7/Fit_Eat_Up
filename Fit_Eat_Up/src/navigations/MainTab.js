//하단 탭 바 생성을 위해 우선적으로 4개의 탭을 생성함
//추후에 수정 예정

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Friend, MyPage } from '../screens';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Friend" component={Friend} />
            <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
    );
};

export default MainTab;