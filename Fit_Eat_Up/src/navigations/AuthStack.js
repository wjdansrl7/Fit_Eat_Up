//로그인화면과 회원가입화면을 포함한 스택 내비게이션

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, Mypage, Personal, With, Recommend, Memo } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Mypage" component={Mypage} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="Recommend" component={Recommend} />
            <Stack.Screen name="With" component={With} />
            <Stack.Screen name="Memo" component={Memo} />
        </Stack.Navigator>
    );
};

export default AuthStack;