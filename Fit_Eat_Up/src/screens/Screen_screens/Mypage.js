import React from 'react';
import styled from 'styled-components/native';
import { Button, Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Mypage = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 20 }}>좋아요 누른 장소</Text>
            <Text style={{ fontSize: 20 }}>가본 장소</Text>
            <Button 
             title="개인정보 수정" 
             onPress={() => navigation.navigate('Personal')}
            />
            <Button
             title="로그아웃"
             onPress={() => navigation.navigate('Logout')}
            />
        </Container>
    );
};

export default Mypage;