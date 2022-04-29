//하단 탭 바 생성을 위해 우선적으로 4개의 탭을 생성함
//추후에 수정 예정

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FriendStack from './FreindStack';
import MypageStack from './MypageStack';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
    return <MaterialIcons name={name} size={size} color={color} />
};

const MainTab = () => {
    return (
        <Tab.Navigator 
            initialRouteName='HomeStack'
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    let name = ''
                    if(route.name === 'HomeStack') name="home";
                    else if (route.name === 'SearchStack') name="search";
                    else if (route.name === 'FriendStack') name="people";
                    else name = 'person';
                    return TabIcon({...props, name });
                },
                headerShown: false
            })}>
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStack} 
                options={{ tabBarLabel: 'Home' }}/>
            <Tab.Screen 
                name="SearchStack" 
                component={SearchStack} 
                options={{ tabBarLabel: 'Search' }}/>
            <Tab.Screen 
                name="FriendStack" 
                component={FriendStack} 
                options={{ tabBarLabel: 'Friend' }}/>
            <Tab.Screen 
                name="MypageStack" 
                component={MypageStack} 
                options={{ tabBarLabel: 'Mypage' }}/>
        </Tab.Navigator>
    );
};

export default MainTab;