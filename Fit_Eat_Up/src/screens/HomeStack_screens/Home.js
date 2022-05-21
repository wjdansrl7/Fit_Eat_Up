import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { OXButton } from '../../components'

const Container = styled.View`
    flex: 1;
    align-items: center; 
    background-color: ${({ theme }) => theme.background};
`;

const Recomselect = styled.View`
    background-color: #CCE5FF;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 30%;
    border-radius: 10px;
    margin: 15px;
`;

const OXselect = styled.View`
    background-color: #CCE5FF;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 200px;
    margin: 40px 0px 0px 0px;
`;

const ButtonContainer = styled.View`
    flex-direction: row;
`;

const Home = ({ navigation }) => {
    const _handleOButtonPress= () => {}
    const _handleXButtonPress= () => {}

    return (
        <Container>
            <Text style={{ fontSize: 20 }}>친구와의 추천맛집 검색</Text>
            <Recomselect />
            <Button title="WithSearch" onPress={() => navigation.navigate("WithSearch")} />
            <OXselect />

            <ButtonContainer>
                <OXButton title="O" onPress={_handleOButtonPress}/>
                <OXButton title="X" onPress={_handleXButtonPress}/>
            </ButtonContainer>
        </Container>
    );
};

export default Home;