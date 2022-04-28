import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Search = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Search</Text>
            <Button title="Result" onPress={() => navigation.navigate("Result")} />
        </Container>
    );
};

export default Search;