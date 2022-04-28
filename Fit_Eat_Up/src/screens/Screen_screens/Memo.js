// Recommend에서 메모를 누르면 나오는 창

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { Input } from '../../components';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Memo = () => {
    const [review, setReview] = useState('');
    return (
        <Container>
            <Text styled={{ fontSize: 20 }}>메모</Text>
            <Input
             label="Review"
             value={review}
             onChangeText={text => setReview(text)}
             onSubmitEditing={() => {}}
             placeholder="Review"
            />
            <Button
             title="저장"
            />
        </Container>
    );
};

export default Memo;