import React, { useState} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Image, Input, Button } from '../../components'; 

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0px 20px;
`;

const ProfileEdit = () => {
    const [nicknameEdit, setNicknameEdit] = useState('');

    return (
        <Container>
            <Text style={{ fontSize: 30 }}>ProfileEdit</Text>
            <Image />
            <Input 
                label="Nickname Edit"
                value={nicknameEdit}
                placeholder="Nickname Edit"/>
            <Button title="프로필 수정" />
        </Container>
    );
};

export default ProfileEdit;