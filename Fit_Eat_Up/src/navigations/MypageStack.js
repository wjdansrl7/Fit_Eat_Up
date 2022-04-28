//4 번째 탭 마이페이지(Mypage)의 스택 내비게이션
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProfile, ProfileEdit } from '../screens';

const Stack = createStackNavigator();

const MypageStack = () => {
    return(
        <Stack.Navigator  screenOptions={{  headerTitleAlign: 'center' }}>
             <Stack.Screen name="MyProfile" component={MyProfile} />
             <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        </Stack.Navigator>
    );
};

export default MypageStack;