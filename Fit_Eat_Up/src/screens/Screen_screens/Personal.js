// MyPage에서 "개인정보 수정" 버튼 누르면 나오는 수정 창

import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { Alert } from 'react-native';
import { Input } from '../../components';
import { ProgressContext, UserContext } from '../../contexts';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`;

const Personal = () => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const _handlePasswordCheckButtonPress = async () => {
        try {
            spinner.start();
            const user = await check({ password });
            Alert.alert('비밀번호 확인됐습니다.', password);
            dispatch(user);
        } catch (e) {
            Alert.alert('비밀번호가 틀렸습니다.', e.message);
        } finally {
            spinner.stop();
        }
    };

    const _handleNicknameChangeButtonPress = async () => {
        try {
            spinner.start();
            const user = await check({ nickname });
            Alert.alert('닉네임이 수정됐습니다.', nickname);
            dispatch(user);
        } catch (e) {
            Alert.alert('존재하는 닉네임입니다.', e.message);
        } finally {
            spinner.stop();
        }
    };

    return (
        <Container>
            <Text style={{ fontSize: 20 }}>비밀번호 확인</Text>
            <Input
             label="Password"
             value={password}
             onChangeText={text => setPassword(text)}
             onSubmitEditing={_handlePasswordCheckButtonPress}
             placeholder="Password"
             isPassword
            />
            <Button
             title="확인"
             onPress={_handlePasswordCheckButtonPress}
            />
            <Text style={{ fontSize: 20}}>닉네임</Text>
            <Input
             label="Nickname"
             value={nickname}
             onChangeText={text => setNickname(text)}
             onSubmitEditing={_handleNicknameChangeButtonPress}
             placeholder="Nickname"
            />
            <Button
             title="수정"
             onPress={_handleNicknameChangeButtonPress}
            />
        </Container>
    );
};

export default Personal;