//로그인 화면
/*이메일, 비밀번호 입력 컴포넌트와 로그인버튼, 회원가입 버튼 생성
signup 버튼 클릭시 회원가입 화면으로 이동함*/

import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Input, Button } from '../../components';
import { Text } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 20px;
`;


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();   //이메일 컴포넌트에서 비밀번호 컴포넌트로 포커스 이동

    const handleLoginButtonPress = () => {};

    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Login</Text>
            <Input
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder="Email"
                returnKeyType="next"
            />
            <Input
                ref={passwordRef}
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() => {}}
                placeholder="Password"
                returnKeyType="done"
                isPassword  //비밀번호 입력시 입력되는 값이 보이지 않도록 설정
            />
            <Button title="Login" onPress={ handleLoginButtonPress } />
            <Button title="signup" onPress={() => navigation.navigate("Signup")} isFilled={false} />
        </Container>
    )
};

export default Login;