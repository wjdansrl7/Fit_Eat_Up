/* 친구와의 추천 음식 창에서 
마음에 드는 음식점이나 카페의 사진을 누르면 나오는 창 */

import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Review = ({ navigation }) => {
    return (
        <Container>
            <Text style= {{ fontSize: 30}}>Recommend Screen</Text>
            <Button 
             title="좋아요"
            />
            <Button
             title="가봤어요"
            />
            <Button
             title="별로에요"
            />
            <Button
             title="메모"
             onPress={() => navigation.navigate('Memo')}
            />
        </Container>
    );
};

export default Review;