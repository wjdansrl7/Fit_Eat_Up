import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Review = () => {
    return (
        <Container>
            <Text style= {{ fontSize: 30}}>Recommend Screen</Text>
            <Button 
             title="좋아요"
            />
            <Button
             title="메모"
            />
        </Container>
    );
};

export default Review;