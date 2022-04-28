import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Result = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Search Result</Text>
        </Container>
    );
};

export default Result;