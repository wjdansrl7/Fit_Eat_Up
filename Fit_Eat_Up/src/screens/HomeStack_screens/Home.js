import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Home = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Home</Text>
            <Button title="WithSearch" onPress={() => navigation.navigate("WithSearch")} />
        </Container>
    );
};

export default Home;