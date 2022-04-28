import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { Image } from '../../components';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const MyFriend = ({ navigation }) => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>MyFriend</Text>
            <Button title="AddFreind" onPress={() => navigation.navigate("AddFriend")} />
            <Image />
            <Button title="FriendProfile" onPress={() => navigation.navigate("FriendProfile")} />
        </Container>
    );
};

export default MyFriend;