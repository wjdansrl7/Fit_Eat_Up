//친구목록의 친구프로필사진, 마이페이지에서 좋아요 누른 장소, 가본 장소 이미지
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    align-self: center;
    margin: 20px;
`;

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.imageBackground};
    width: 80px;
    height: 80px;  
    border-radius: 50px;
`;

const SmallImage = () => {
    return (
        <Container>
            <StyledImage />
        </Container>
    )
};

export default SmallImage;