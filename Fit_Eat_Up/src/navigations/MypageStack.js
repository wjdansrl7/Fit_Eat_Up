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