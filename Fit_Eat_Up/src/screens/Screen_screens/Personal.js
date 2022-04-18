import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { Input } from '../components';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`;

const Personal = () => {
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    return (
        <Container>
            <Text style={{ fontSize: 20 }}>비밀번호 확인</Text>
            <Input
             label="Password"
             value={password}
             onChangeText={text => setPassword(text)}
             onSubmitEditing={() => {}}
             placeholder="Password"
             isPassword
            />
            <Text style={{ fontSize: 20}}>닉네임</Text>
            <Input
             label="Nickname"
             value={nickname}
             onChangeText={text => setNickname(text)}
             onSubmitEditing={() => {}}
             placeholder="Nickname"
            />
            <Button
             title="수정"
            />
        </Container>
    );
};

export default Personal;