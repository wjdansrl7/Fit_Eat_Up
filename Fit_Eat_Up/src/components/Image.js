//사용자의 프로필 이미지를 나타내는 컴포넌트
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.imageBackground};
    width: 100px;
    height: 100px;  
    border-radius: 50px;
`;

const Image = () => {
    return (
        <Container>
            <StyledImage />
        </Container>
    )
};

export default Image;