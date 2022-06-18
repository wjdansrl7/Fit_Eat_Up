import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProfile, ProfileEdit, GoodList, VisitList } from '../screens';

const Stack = createStackNavigator();

const MypageStack = () => {
    return(
        <Stack.Navigator  screenOptions={{  headerTitleAlign: 'center' }}>
             <Stack.Screen name="MyProfile" component={MyProfile} />
             <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
             <Stack.Screen name="GoodList" component={GoodList} />
             <Stack.Screen name="VisitList" component={VisitList} />
        </Stack.Navigator>
    );
};

export default MypageStack;