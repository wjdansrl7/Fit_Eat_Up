//4번째 탭 마이페이지
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const MyPage = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>MyPage</Text>
        </Container>
    )
};

export default MyPage;