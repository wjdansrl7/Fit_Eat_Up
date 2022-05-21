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


const AddFriend = ({ navigation }) => {
    const [FriendNickname, setFriendNickname] = useState('');
    return (
        <Container>
            <Text style={{ fontSize: 20 }}>친구의 닉네임을 입력해주세요!</Text>
            <Input 
                label="Input Friend Nickname"
                value={FriendNickname}
                onChangeText={text => setFriendNickname(text)}
                onSubmitEditing={()=>{}}
                placeholder="Freind Nickname" 
            />
            <Button title="친구추가" onPress={() => navigation.navigate("MyFriend")} />
        </Container>
    );
};

export default AddFriend;