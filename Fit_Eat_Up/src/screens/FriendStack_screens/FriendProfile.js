import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Image } from '../../components';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Profileimage = styled.View`
    margin: 30px;
`;

const FriendProfile = () => {
    return (
        <Container> 
            <Profileimage>
                <Image />
            </Profileimage>
            <Text style={{ fontSize: 20 }}>Friend Nickname</Text>
        </Container>
    );
};

export default FriendProfile;