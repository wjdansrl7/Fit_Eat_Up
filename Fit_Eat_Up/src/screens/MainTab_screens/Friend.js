//3번째 탭 친구관리
//파일 이름 수정
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Friend = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Friend</Text>
        </Container>
    )
};

export default Friend;