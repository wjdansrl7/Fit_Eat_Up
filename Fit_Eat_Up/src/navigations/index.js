/* 내비게이션 관리
아직 로그인 시 메인화면으로 넘어가는 기능을 구현하지 않음
현재는 AuthStack만 import 하여 실행시 로그인과 회원가입 화면만 보임 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import MainTab from "./MainTab";
import AuthStack from './AuthStack';

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default Navigation;