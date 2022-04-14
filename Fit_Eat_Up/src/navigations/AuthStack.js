//로그인화면과 회원가입화면을 포함한 스택 내비게이션

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Sign Up with Email" component={Signup} />
        </Stack.Navigator>
    );
};

export default AuthStack;