//회원가입 화면
/*현재 이름, 이메일, 패스워드, 패스워드 재확인 입력하도록 생성했고,
추후에 상의 후 변경예정*/
import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Input, Button } from '../../components';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0 20px;
`;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const _handleSignupButtonPress = () => {};

    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Signup</Text>
            <Input
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                onSubmitEditing={() => {
                    setName(name.trim());
                    emailRef.current.focus()
                }}
                onBlur={() => setName(name.trim())}
                placeholder="Name"
                returnKeyType="next"
            />
            <Input
                Ref={emailRef}
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
                onSubmitEditing={() => passwordConfirmRef.current.focus()}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <Input
                ref={passwordConfirmRef}
                label="Password Confirm"
                value={passwordConfirm}
                onChangeText={text => setPasswordConfirm(text)}
                onSubmitEditing={() =>_handleSignupButtonPress}
                placeholder="Password"
                returnKeyType="done"
                isPassword
            />
            <Button title="Signup" onPress={_handleSignupButtonPress} />
        </Container>
    )
};

export default Signup;