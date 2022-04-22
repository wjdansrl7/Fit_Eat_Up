// Spinner 컴포넌트 생성
// 사용자의 잘못된 입력이나 클릭을 방지하는 기능
// 회원가입, 로그인 등에 사용

import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    z-index: 2;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.spinnerBackground};
`;

const Spinner = () => {
    const theme = useContext(ThemeContext);
    return (
        <Container>
            <ActivityIndicator 
             size={'large'}
             color={theme.spinnerIndicator}
            />
        </Container>
    );
};

export default Spinner;