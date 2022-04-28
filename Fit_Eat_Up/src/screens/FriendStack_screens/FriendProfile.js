import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Image } from '../../components';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const FriendProfile = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>FriendProfile</Text>
            <Image />
            <Text style={{ fontsize: 20}}>Friend Nickname</Text>
        </Container>
    );
};

export default FriendProfile;