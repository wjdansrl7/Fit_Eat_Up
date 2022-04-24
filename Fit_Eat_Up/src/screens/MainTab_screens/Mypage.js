//4번째 탭 마이페이지
//원래 Screen_screens에 있던 Mypage를 MainStack만들면서 합침

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Button, Text } from 'react-native';

import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';



const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Mypage = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const _handleLogoutButtonPress = async () => {
        try {
            await logout();
        } catch (e) {
        } finally {
            dispatch({});
        }
    };
    return (
        <Container>
            <Text style={{ fontSize: 20 }}>좋아요 누른 장소</Text>
            <Text style={{ fontSize: 20 }}>가본 장소</Text>
            <Button 
             title="개인정보 수정" 
             onPress={() => navigation.navigate('Personal')}
            />
            <Button
             title="Logout"
             onPress={_handleLogoutButtonPress}
             containerStyle={{ marginTop: 30, backgroundColor: theme.buttonLogout}}
            />
        </Container>
    );
};

export default Mypage;