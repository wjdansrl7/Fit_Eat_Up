/* 내비게이션 관리
아직 로그인 시 메인화면으로 넘어가는 기능을 구현하지 않음 -> 구현
현재는 AuthStack만 import 하여 실행시 로그인과 회원가입 화면만 보임 
MainStack을 추가함
*/

import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import MainTab from "./MainTab";
import AuthStack from './AuthStack';
import { Spinner } from '../components';
import { ProgressContext, UserContext } from '../contexts';
//import MainStack from './Mainstack';

const Navigation = () => {
    const { inProgress } = useContext(ProgressContext);
//    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            <AuthStack />
            {inProgress && <Spinner /> }
        </NavigationContainer>
    );
};

export default Navigation;