import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View } from 'react-native';
import { Image, Input, Button } from '../../components'; 

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
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
            <View style={styles.inputArea} >
                <Input 
                    label="닉네임 수정"
                    value={nicknameEdit}
                    onChangeText={text => setNicknameEdit(text)}
                    onSubmitEditing={()=>{}}
                    placeholder="Nickname Edit"/>
                <Button title="프로필 수정" onPress={() => navigation.navigate("MyProfile")} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    inputArea: {
        height: 150,
        margin: 10,
    },
});
export default ProfileEdit;