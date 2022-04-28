import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Input ,Button } from '../../components';


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0px 20px;
`;


const AddFriend = () => {
    const [FriendNickname, setFriendNickname] = useState('');
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>AddFriend</Text>
            <Input 
                label="Input Friend Nickname"
                value={FriendNickname}
                placeholder="Freind Nickname" 
            />
            <Button title="친구추가"/>
        </Container>
    );
};

export default AddFriend;