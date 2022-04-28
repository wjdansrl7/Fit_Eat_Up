//3번째 탭 Friend(친구관리)의 스택 내비게이션
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyFriend, AddFriend, FriendProfile } from '../screens';

const Stack = createStackNavigator();

const FriendStack = () => {
    return(
        <Stack.Navigator  screenOptions={{  headerTitleAlign: 'center' }}>
             <Stack.Screen name="MyFriend" component={MyFriend} />
             <Stack.Screen name="AddFriend" component={AddFriend} />
             <Stack.Screen name="FriendProfile" component={FriendProfile} />
        </Stack.Navigator>
    );
};

export default FriendStack;