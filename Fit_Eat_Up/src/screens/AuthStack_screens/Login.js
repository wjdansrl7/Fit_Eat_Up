//로그인 화면
/*현재 로그인 기능 구현됨 
-> 이메일, 패스워드 입력 후 Login 버튼 클릭시 메인화면으로 넘어감*/

import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components/native';
import { Input, Button } from '../../components';
import { Text } from 'react-native';
import { login } from '../../utils/firebase'; //firebase.js에서 구현한 login 함수 import
import { Alert } from 'react-native'; //로그인 버튼 클릭 시 알림 창이 뜨게 하는 Alert
import { ProgressContext, UserContext } from '../../contexts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0px 20px;
`;


const Login = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();   //이메일 컴포넌트에서 비밀번호 컴포넌트로 포커스 이동

    //로그인 기능 
    const handleLoginButtonPress = async () => {
        try {
            spinner.start();
            const user = await login({ email, password });
            dispatch(user); //로그인 성공 시 user의 상태가 인증된 사용자 정보로 변경되도록 함
            Alert.alert('Login Success', user.email);
        } catch(e) {
            Alert.alert('Login Error', e.message);
        } finally {
            spinner.stop();
        }
    };

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle={{flex: 1}}
            extraScrollHeight={20}>
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
                <Button title="Signup" onPress={() => navigation.navigate("Signup")} isFilled={false} />
            </Container>
        </KeyboardAwareScrollView>
    )
};

export default Login;