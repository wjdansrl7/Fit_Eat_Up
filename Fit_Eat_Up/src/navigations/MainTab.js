//하단 탭 바 생성을 위해 우선적으로 4개의 탭을 생성함
//추후에 수정 예정

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FriendStack from './FreindStack';
import MypageStack from './MypageStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="SearchStack" component={SearchStack} />
            <Tab.Screen name="FriendStack" component={FriendStack} />
            <Tab.Screen name="MypageStack" component={MypageStack} />
        </Tab.Navigator>
    );
};

export default MainTab;