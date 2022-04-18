import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const With = ({ navigation }) => {
    return (
        <Container>
            <Text style={{fontSize: 30}}>친구들과의 공통 맛집</Text>
            <Text style={{fontSize: 20}}>음식점 추천</Text>
            <Button 
             title='음식 사진' 
             onPress={() => navigation.navigate('Recommend')}
            />
            <Text style={{fontSize: 20}}>카페 추천</Text>
            <Button 
             title='카페 사진' 
             onPress={() => navigation.navigate('Recommend')}
            />
        </Container>
    );
};

export default With;