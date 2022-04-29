import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image, Input, Button } from '../../components'; 

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    padding: 0px 20px;
`;

const Profileimage = styled.View`
    margin: 30px;
`;

const ProfileEdit = ({ navigation}) => {
    const [nicknameEdit, setNicknameEdit] = useState('');

    return (
        <Container>
            <Profileimage>
             <Image />
            </Profileimage>
            <Input 
                label="Nickname Edit"
                value={nicknameEdit}
                onChangeText={text => setNicknameEdit(text)}
                onSubmitEditing={()=>{}}
                placeholder="Nickname Edit"/>
            <Button title="프로필 수정" onPress={() => navigation.navigate("MyProfile")} />
        </Container>
    );
};

export default ProfileEdit;