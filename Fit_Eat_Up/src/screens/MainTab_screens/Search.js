//2번째 탭 검색
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Search = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Search</Text>
        </Container>
    )
};

export default Search;