import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { Input } from '../../components';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0px 20px;
`;

const CateSelect = styled.View`
    background-color: #CCE5FF;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 25%;
    border-radius: 10px;
    margin: 15px;
`;


const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Input
                label="장소 검색"
                value={search}
                onChangeText={text => setSearch(text)}
                onSubmitEditing={() => {}}
                placeholder="장소를 입력하세요."
            />
            <Button title="Search" onPress={() => navigation.navigate("Result")} />
            <Text style={{ fontSize: 20}}>카테고리 검색</Text>
            <CateSelect />
        </Container>
    );
};

export default Search;