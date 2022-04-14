//1번째 탭 홈
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Home = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Home</Text>
        </Container>
    )
};

export default Home;