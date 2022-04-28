//회원가입 화면
/*현재 이름, 이메일, 패스워드, 패스워드 재확인 입력하도록 생성했고,
추후에 상의 후 변경예정*/
import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components/native';
import { Input, Button, Image } from '../../components';
import { signup } from '../../utils/firebase' //firebase.js에서 구현한 sinup 함수 import
import { Alert } from 'react-native'     //회원가입 버튼 클릭시 알림창이 뜨게 하는 Alert
import { ProgressContext, UserContext } from '../../contexts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding:40px 20px;
`;

const Signup = () => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    //로그아웃 기능
    const _handleSignupButtonPress = async () => {
        try {
            spinner.start();
            const user = await signup({ email, password });
            console.log(user);  //계정 추가시 콘솔에서 추가된 사용자 확인 가능
            dispatch(user);
            Alert.alert('Signup Success', user.email);
        } catch (e) {
            Alert.alert('Singup Error', e.message);
        } finally {
            spinner.stop();
        }
    };

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={20}>
        <Container>
            <Image />
            <Input
                label="NickName"
                value={name}
                onChangeText={text => setName(text)}
                onSubmitEditing={() => {
                    setName(name.trim());
                    emailRef.current.focus()
                }}
                onBlur={() => setName(name.trim())}
                placeholder="NickName"
                returnKeyType="next"
            />
            <Input
                ref={emailRef}
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
                placeholder="Password Confirm"
                returnKeyType="done"
                isPassword
            />
            <Button title="Signup" onPress={_handleSignupButtonPress} />
        </Container>
        </KeyboardAwareScrollView>
    )
};

export default Signup;